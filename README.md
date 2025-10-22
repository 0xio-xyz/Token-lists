# 0xio Token Lists

> Official token lists for 0xio Wallet and Octra Network

**License**: MIT

## Overview

0xio Token Lists is a specification for lists of token metadata (address, decimals, logos, etc.) that can be used by any dApp interface on the **Octra Network blockchain**. This repository contains the official token list used by [0xio Wallet](https://0xio.xyz) and **0xio DEX**.

**About the Projects:**
- **Octra Network** - Layer 1 blockchain (built by Octra team) - Currently **Testnet Only**
- **0xio Wallet** - Non-custodial wallet built on top of Octra Network
- **0xio DEX** - Decentralized exchange for swapping tokens on Octra Network
- **Token Lists** - Standardized token registry for the Octra ecosystem

**Anyone can add their token** to this list to get listed on 0xio DEX and Wallet! See [HOW_TO_ADD_TOKEN.md](./HOW_TO_ADD_TOKEN.md) for step-by-step instructions.

## Features

- **Standardized Format**: JSON schema-based token list specification
- **Extensible**: Support for custom metadata via extensions
- **Validated**: Automated validation against JSON schema
- **Tagged**: Categorize tokens for easy discovery
- **Version Control**: Semantic versioning for list updates

## Token List Structure

A token list is a JSON file containing:
- **Metadata**: List name, version, timestamp
- **Tags**: Token categories (native, stablecoin, defi, etc.)
- **Tokens**: Array of token metadata

### Example Token Entry

```json
{
  "network": "octra-testnet",
  "address": "oct1abc123...",
  "symbol": "TOKEN",
  "name": "Example Token",
  "decimals": 18,
  "logoURI": "https://example.com/logo.png",
  "tags": ["defi"],
  "extensions": {
    "website": "https://token.com",
    "description": "Example DeFi token",
    "twitter": "https://twitter.com/token"
  }
}
```

## Usage

### Using in 0xio Wallet

The 0xio Wallet automatically loads the default token list from this repository:

```
https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json
```

### Using in Your DApp

```typescript
// Fetch token list
const response = await fetch('https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json');
const tokenList = await response.json();

// Access tokens
tokenList.tokens.forEach(token => {
  console.log(`${token.symbol}: ${token.address}`);
});

// Filter by tag
const stablecoins = tokenList.tokens.filter(t => t.tags?.includes('stablecoin'));
```

### Using with JavaScript

```javascript
import tokenList from '@0xio/token-lists/octra.tokenlist.json';

// Find token by symbol
const usdt = tokenList.tokens.find(t => t.symbol === 'USDT');

// Find token by address
const token = tokenList.tokens.find(t =>
  t.address.toLowerCase() === address.toLowerCase()
);
```

## Available Tags

- **native**: Native blockchain token (OCT)
- **wrapped**: Wrapped tokens from other chains
- **stablecoin**: USD or stablecoin pegged tokens
- **defi**: DeFi protocol tokens
- **gaming**: Gaming and metaverse tokens
- **nft**: NFT platform tokens

## Schema Validation

All token lists must validate against the [JSON schema](./schema.json).

### Validation

```bash
# Install dependencies
npm install

# Validate token list
npm test
```

## Add Your Token (For DEX Listing)

Want to list your token on 0xio DEX and 0xio Wallet? Follow our simple guide!

### Quick Steps:

1. Deploy your token on Octra Testnet
2. Prepare your token logo (256x256 PNG)
3. Fork this repository
4. Add your token to `octra.tokenlist.json`
5. Add logo to `logos/` directory
6. Run `npm test` to validate
7. Submit a pull request

**[Read the Complete Guide: HOW_TO_ADD_TOKEN.md](./HOW_TO_ADD_TOKEN.md)**

This comprehensive guide includes:
- Step-by-step instructions
- Field reference
- Common mistakes to avoid
- Validation checklist
- PR template

See also: [CONTRIBUTING.md](./CONTRIBUTING.md) for general contribution guidelines.

### Quick Add Token

Required fields:
- `network`: 2 (testnet)
- `address`: Token contract address (47 chars, starts with "oct1")
- `symbol`: Token ticker (max 20 chars)
- `name`: Full token name (max 40 chars)
- `decimals`: Number of decimals (commonly 6 or 18)
- `logoURI`: URL to token logo (256x256 PNG)

## File Structure

```
Token-lists/
├── octra.tokenlist.json    # Main token list
├── schema.json             # JSON schema definition
├── package.json            # NPM package config
├── README.md               # This file
├── ARCHITECTURE.md         # Project relationship explanation
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT license
├── logos/                  # Token logo images
│   ├── oct.png
│   └── ...
├── examples/               # Example token lists
│   └── custom-list.json
└── test/                   # Validation scripts
    └── validate.js
```

For more details on how 0xio relates to Octra Network, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Versioning

Token lists use [semantic versioning](https://semver.org/):

- **Major**: Increment when removing tokens or changing addresses
- **Minor**: Increment when adding new tokens
- **Patch**: Increment for metadata updates (logo, description, etc.)

## OCT Token (Native)

The native OCT token (Octra Network's blockchain token) is included by default:

```json
{
  "network": "octra-testnet",
  "address": "native",
  "symbol": "OCT",
  "name": "Octra",
  "decimals": 6,
  "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/oct.png",
  "tags": ["native"]
}
```

**Key Properties:**
- **Blockchain**: Octra Network (separate project)
- **Decimals**: 6 (1 OCT = 1,000,000 microOCT)
- **Address**: "native" (not a contract, native blockchain token)
- **Used For**: Gas fees, transactions on Octra Network
- **Explorer**: https://octrascan.io

## Network Information

### Octra Testnet (Network: octra-testnet) - CURRENT
- **RPC**: https://octra.network
- **Explorer**: https://octrascan.io
- **Native Token**: OCT (6 decimals)
- **Status**: Active (Testnet)

### Octra Mainnet (Network ID: 1)
- **Status**: Coming Soon

## Resources

### 0xio Wallet (This Project)
- **Website**: https://0xio.xyz
- **Wallet Repository**: https://github.com/0xio-xyz
- **SDK**: [@0xgery/0xio-sdk](https://www.npmjs.com/package/@0xgery/0xio-sdk)
- **Token Lists**: https://github.com/0xio-xyz/Token-lists

### Octra Network (Blockchain)
- **Network RPC**: https://octra.network
- **Explorer**: https://octrascan.io
- **Documentation**: (Octra team's docs)

## License

MIT License - see [LICENSE](./LICENSE) file

## Support

- **Issues**: [GitHub Issues](https://github.com/0xio-xyz/Token-lists/issues)
- **Email**: team@0xio.xyz
- **Website**: https://0xio.xyz

---

**Note**: Always verify token addresses before use. This list is provided as-is with no guarantees. Users should do their own research before interacting with any tokens.
