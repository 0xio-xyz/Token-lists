# 0xio Token Lists

Standardized token registry for the Octra Network ecosystem.

**License**: MIT

## Overview

0xio Token Lists is a JSON-based registry of token metadata (address, decimals, logos, etc.) used by 0xio Wallet, 0xio DEX, and any dApp on the Octra Network.

**Ecosystem:**
- **Octra Network** - Layer 1 blockchain with built-in FHE privacy (Mainnet live)
- **0xio Wallet** - Self-custodial wallet for Octra Network
- **0xio DEX** - Decentralized exchange for Octra tokens
- **Token Lists** - This repository. Standardized token registry

**Anyone can add their token.** See [Adding Your Token](#adding-your-token) below.

## Token List URL

```
https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json
```

## Current Tokens

| Symbol | Name | Network | Type |
|--------|------|---------|------|
| OCT | Octra | Mainnet | Native |
| OCT (Private) | Octra | Mainnet | Native (encrypted) |
| OCT | Octra (Devnet) | Devnet | Native |
| OCT (Private) | Octra (Devnet) | Devnet | Native (encrypted) |
| WOCT | Wrapped OCT | Devnet | OAT contract |
| 0XIO | 0xio | Devnet | OAT contract |

## Usage

### Fetch the token list

```typescript
const response = await fetch(
  'https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json'
);
const tokenList = await response.json();

// All tokens
const tokens = tokenList.tokens;

// Find by symbol
const oct = tokens.find(t => t.symbol === 'OCT' && !t.extensions?.isPrivate);

// Filter by network
const mainnetTokens = tokens.filter(t => t.network === 'octra-mainnet');

// Filter by tag
const privateTokens = tokens.filter(t => t.tags?.includes('private'));
```

## Token Entry Format

```json
{
  "network": "octra-mainnet",
  "address": "octAbc123def456...",
  "symbol": "TOKEN",
  "name": "Example Token",
  "decimals": 6,
  "logoURI": "https://example.com/logo.png",
  "tags": ["oat", "dex"],
  "extensions": {
    "website": "https://token.com",
    "description": "Brief description of your token",
    "isNative": false,
    "isPrivate": false,
    "isTestnet": false,
    "blockchain": "Octra Network"
  }
}
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `network` | string | `octra-mainnet` or `octra-devnet` |
| `address` | string | Contract address (starts with `oct`, 47 chars) or `native` |
| `symbol` | string | Token ticker (max 20 chars, uppercase) |
| `name` | string | Full token name (max 40 chars) |
| `decimals` | number | Decimal places (commonly 6) |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `logoURI` | string | URL to token logo (256x256 PNG or SVG) |
| `tags` | array | Tag identifiers (see below) |
| `extensions` | object | Additional metadata |

### Available Tags

| Tag | Description |
|-----|-------------|
| `native` | Native blockchain token (OCT) |
| `private` | Privacy-enhanced encrypted token |
| `oat` | Octra Asset Token (contract token) |
| `wrapped` | Wrapped native token |
| `dex` | Available on 0xio DEX |
| `mainnet` | Mainnet token |
| `devnet` | Devnet token |

### Extensions

| Field | Type | Description |
|-------|------|-------------|
| `website` | string | Official website |
| `description` | string | Brief description |
| `explorer` | string | Block explorer URL |
| `twitter` | string | Twitter/X URL |
| `telegram` | string | Telegram group URL |
| `isNative` | boolean | Is native token (not a contract) |
| `isPrivate` | boolean | Is privacy/encrypted variant |
| `isTestnet` | boolean | Is testnet/devnet token |

## Adding Your Token

### Prerequisites

1. Deploy your OAT token on Octra Network
2. Prepare a token logo (256x256 PNG, transparent background, max 100KB)

### Steps

1. **Fork** this repository
2. **Add your logo** to `logos/` directory as `{SYMBOL}.png`
3. **Add your token** to `octra.tokenlist.json` in the `tokens` array
4. **Increment version** (minor for new tokens)
5. **Update timestamp** to current ISO 8601 datetime
6. **Submit a Pull Request**

### Example PR Addition

```json
{
  "network": "octra-mainnet",
  "address": "octYourTokenAddressHere1234567890abcdefghijk",
  "symbol": "MYTOKEN",
  "name": "My Token",
  "decimals": 6,
  "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/MYTOKEN.png",
  "tags": ["oat", "dex"],
  "extensions": {
    "website": "https://mytoken.com",
    "description": "Description of your token"
  }
}
```

### PR Checklist

- [ ] Token deployed and verified on Octra Network
- [ ] Logo added to `logos/` (256x256 PNG)
- [ ] Token added to `octra.tokenlist.json`
- [ ] Version minor number incremented
- [ ] Timestamp updated
- [ ] Address is valid (47 chars, starts with `oct`)
- [ ] No duplicate entries

## Versioning

Follows [semantic versioning](https://semver.org/):

- **Major** - Token removed or address changed (breaking)
- **Minor** - New token added
- **Patch** - Metadata update (logo, description, etc.)

## Network Info

### Octra Mainnet (`octra-mainnet`)
- **Native Token**: OCT (6 decimals)
- **Explorer**: https://lite.octrascan.io

### Octra Devnet (`octra-devnet`)
- **Native Token**: OCT (6 decimals)
- **Explorer**: https://devnet.octrascan.io

## File Structure

```
token-lists/
  octra.tokenlist.json   # Token list
  logos/                  # Token logo files
  HOW_TO_ADD_TOKEN.md    # Guide for listing your token
  DOCUMENTATION.md       # Detailed docs and integration guide
  README.md              # This file
  LICENSE                # MIT
```

## Resources

- **0xio Website**: https://0xio.xyz
- **0xio GitHub**: https://github.com/0xio-xyz
- **0xio SDK**: https://www.npmjs.com/package/@0xio/sdk
- **Octra Explorer**: https://lite.octrascan.io
- **Support**: team@0xio.xyz

For detailed integration guides (React hooks, TypeScript types, wallet integration), see [DOCUMENTATION.md](./DOCUMENTATION.md).

---

**Note**: Always verify token addresses before use. This list is provided as-is. Do your own research before interacting with any token.
