# Token Lists - Complete Documentation

> Standardized token registry for Octra Network ecosystem

## Table of Contents

- [Overview](#overview)
- [Token List Specification](#token-list-specification)
- [Getting Started](#getting-started)
- [Token List Format](#token-list-format)
- [Integration Guide](#integration-guide)
- [Best Practices](#best-practices)

## Overview

The 0xio Token Lists project provides a standardized format for listing token metadata on the Octra Network. This registry is used by 0xio Wallet, 0xio DEX, and other dApps in the ecosystem to display token information, logos, and metadata.

### Ecosystem

```
Octra Network (Blockchain)
    |
Token Lists (This Repository)
    |
+-------------+-------------+-------------+
|  0xio Wallet|  0xio DEX   |  Your dApp  |
+-------------+-------------+-------------+
```

## Token List Specification

### Current Version

List version: **1.4.1** (see `octra.tokenlist.json`)

### Schema Overview

A token list consists of:

1. **Metadata** - List name, version, timestamp
2. **Tags** - Categories for organizing tokens
3. **Tokens** - Array of token entries with metadata

### Minimal Example

```json
{
  "name": "My Token List",
  "version": { "major": 1, "minor": 0, "patch": 0 },
  "timestamp": "2026-01-01T00:00:00Z",
  "tokens": [
    {
      "network": "octra-mainnet",
      "address": "octYourContractAddress1234567890abcdefghijk",
      "symbol": "TOKEN",
      "name": "Example Token",
      "decimals": 6,
      "logoURI": "https://example.com/logo.png"
    }
  ]
}
```

## Getting Started

### Token List URL

```
https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json
```

### JavaScript/TypeScript

```typescript
const response = await fetch(
  'https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json'
);
const tokenList = await response.json();

// All tokens
const tokens = tokenList.tokens;

// Find token by symbol
const oct = tokens.find(t => t.symbol === 'OCT' && t.network === 'octra-mainnet');

// Find token by address
const token = tokens.find(t => t.address === address);

// Filter by tag
const privateTokens = tokens.filter(t => t.tags?.includes('private'));

// Filter by network
const mainnetTokens = tokens.filter(t => t.network === 'octra-mainnet');
```

### React Hook

```typescript
import { useState, useEffect } from 'react';

interface Token {
  network: string;
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  tags?: string[];
  extensions?: Record<string, unknown>;
}

function useTokenList() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json')
      .then(res => res.json())
      .then(data => {
        setTokens(data.tokens);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const getToken = (addressOrSymbol: string) =>
    tokens.find(t => t.address === addressOrSymbol || t.symbol === addressOrSymbol);

  const searchTokens = (query: string) => {
    const q = query.toLowerCase();
    return tokens.filter(
      t => t.symbol.toLowerCase().includes(q) || t.name.toLowerCase().includes(q)
    );
  };

  return { tokens, loading, error, getToken, searchTokens };
}
```

### Using with 0xio SDK

```typescript
import { OctraClient } from '@0xio/sdk';

// The SDK can be used alongside token lists for full dApp integration
const client = new OctraClient({ network: 'mainnet' });
```

## Token List Format

### List Metadata

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Name of the token list |
| `version` | object | Yes | Semantic version `{ major, minor, patch }` |
| `timestamp` | string | Yes | ISO 8601 datetime of last update |
| `logoURI` | string | No | Logo for the list itself |
| `keywords` | array | No | Keywords for discovery |
| `tags` | object | No | Tag definitions |

### Token Entry

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `network` | string | Yes | `octra-mainnet` or `octra-devnet` |
| `address` | string | Yes | Contract address (47 chars, starts with `oct`) or `native` / `native-private` |
| `symbol` | string | Yes | Token ticker (max 20 chars, uppercase) |
| `name` | string | Yes | Full token name (max 40 chars) |
| `decimals` | number | Yes | Decimal places (commonly 6) |
| `logoURI` | string | No | URL to token logo (256x256 PNG or SVG) |
| `tags` | array | No | Array of tag identifiers |
| `extensions` | object | No | Additional metadata |

### Extensions

| Field | Type | Description |
|-------|------|-------------|
| `website` | string | Official website URL |
| `description` | string | Brief description |
| `explorer` | string | Block explorer URL for the token |
| `twitter` | string | Twitter/X URL |
| `telegram` | string | Telegram group URL |
| `isNative` | boolean | Is blockchain native token (not a contract) |
| `isPrivate` | boolean | Is privacy/encrypted variant |
| `isTestnet` | boolean | Is devnet/testnet token |
| `blockchain` | string | Blockchain name (`"Octra Network"`) |

### Available Tags

| Tag | Description |
|-----|-------------|
| `native` | Blockchain native token (OCT) |
| `private` | Privacy-enhanced encrypted token |
| `oat` | Octra Asset Token (contract token) |
| `wrapped` | Wrapped native token |
| `dex` | Available on 0xio DEX |
| `mainnet` | Mainnet token |
| `devnet` | Devnet token |

### Special Addresses

| Address | Meaning |
|---------|---------|
| `native` | Native OCT token (public balance) |
| `native-private` | Native OCT encrypted balance |
| `oct...` (47 chars) | OAT contract token |

## Integration Guide

### TypeScript Types

```typescript
interface TokenList {
  name: string;
  version: { major: number; minor: number; patch: number };
  timestamp: string;
  logoURI?: string;
  keywords?: string[];
  tags?: Record<string, { name: string; description: string }>;
  tokens: Token[];
}

interface Token {
  network: string;
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  tags?: string[];
  extensions?: {
    website?: string;
    description?: string;
    explorer?: string;
    twitter?: string;
    telegram?: string;
    isNative?: boolean;
    isPrivate?: boolean;
    isTestnet?: boolean;
    blockchain?: string;
  };
}
```

### Token Service Example

```typescript
class TokenService {
  private tokens: Token[];

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  getByAddress(address: string): Token | undefined {
    return this.tokens.find(t => t.address === address);
  }

  getBySymbol(symbol: string, network?: string): Token[] {
    return this.tokens.filter(
      t => t.symbol === symbol && (!network || t.network === network)
    );
  }

  getByNetwork(network: string): Token[] {
    return this.tokens.filter(t => t.network === network);
  }

  getByTag(tag: string): Token[] {
    return this.tokens.filter(t => t.tags?.includes(tag));
  }

  getPublicTokens(network: string): Token[] {
    return this.tokens.filter(
      t => t.network === network && !t.extensions?.isPrivate
    );
  }

  getPrivateTokens(network: string): Token[] {
    return this.tokens.filter(
      t => t.network === network && t.extensions?.isPrivate
    );
  }
}
```

### Displaying Token Logos

Token logos are hosted on IPFS via Pinata. SVG logos can be rendered directly:

```tsx
// React Native with react-native-svg
import { SvgUri } from 'react-native-svg';

function TokenLogo({ token }: { token: Token }) {
  if (token.logoURI?.endsWith('.svg')) {
    return <SvgUri uri={token.logoURI} width={32} height={32} />;
  }
  return <Image source={{ uri: token.logoURI }} style={{ width: 32, height: 32 }} />;
}
```

```tsx
// Web
function TokenLogo({ token }: { token: Token }) {
  return <img src={token.logoURI} alt={token.symbol} width={32} height={32} />;
}
```

## Best Practices

### For Token Projects

1. **Logo Quality** - 256x256 PNG or SVG, transparent background, recognizable design
2. **Complete Info** - Fill all required fields plus website and description
3. **Keep Updated** - Submit PRs for metadata changes, increment patch version
4. **Valid Address** - 47 characters, starts with `oct`, deployed on-chain

### For dApp Developers

1. **Cache the List** - Don't fetch on every render. Cache for at least 5 minutes
2. **Handle Missing Logos** - Show a fallback (first letter of symbol) when logoURI is null
3. **Filter by Network** - Always filter tokens by the user's current network
4. **Respect Privacy Tags** - Show private tokens only in privacy-enabled contexts

### Versioning

- **Major** - Token removed or address changed (breaking)
- **Minor** - New token added
- **Patch** - Metadata update (logo, description, links)

## Network Info

### Octra Mainnet (`octra-mainnet`)
- **Native Token**: OCT (6 decimals)
- **Explorer**: https://lite.octrascan.io

### Octra Devnet (`octra-devnet`)
- **Native Token**: OCT (6 decimals)
- **Explorer**: https://devnet.octrascan.io

## Adding Your Token

See [HOW_TO_ADD_TOKEN.md](./HOW_TO_ADD_TOKEN.md) for the complete step-by-step guide.

## Resources

- **0xio Website**: https://0xio.xyz
- **0xio SDK**: https://www.npmjs.com/package/@0xio/sdk
- **GitHub**: https://github.com/0xio-xyz
- **Support**: team@0xio.xyz

## License

MIT License - See [LICENSE](LICENSE)
