# How to Add Your Token to 0xio Token List

> **For DEX listing and wallet integration on Octra Network Testnet**

This guide will walk you through adding your token to the official 0xio token list, which will make your token available on:
-  **0xio Wallet** - Users can view and send your token
-  **0xio DEX** - Users can swap your token
-  **All DApps** - That use this token list

## Quick Start (5 Steps)

### Step 1: Deploy Your Token on Octra Testnet

Your token must be deployed on **Octra Network Testnet** (Network: octra-testnet).

```bash
# Make sure you're deploying to:
RPC: https://octra.network
Network: octra-testnet
Explorer: https://octrascan.io
```

**Requirements:**
- Token contract deployed on Octra Network
- Contract verified on [OctraScan](https://octrascan.io)
- Token is functional and can be transferred

---

### Step 2: Prepare Your Token Logo

Create a high-quality logo for your token:

**Requirements:**
- **Format**: PNG with transparent background
- **Size**: 256x256 pixels (exactly)
- **File size**: Less than 100KB
- **Naming**: `{symbol}.png` (lowercase)

**Example:** If your token is "MyToken" (MYT), create `myt.png`

**Tools:**
- [Photopea](https://www.photopea.com/) - Free online editor
- [Squoosh](https://squoosh.app/) - Compress images
- [Remove.bg](https://www.remove.bg/) - Remove backgrounds

---

### Step 3: Fork and Clone the Repository

```bash
# Fork the repository on GitHub
# https://github.com/0xio-xyz/Token-lists

# Clone YOUR fork
git clone https://github.com/YOUR_USERNAME/Token-lists.git
cd Token-lists

# Install dependencies
npm install
```

---

### Step 4: Add Your Token

#### 4.1 Add Your Logo

```bash
# Copy your logo to the logos directory
cp /path/to/your/logo.png logos/myt.png
```

#### 4.2 Edit the Token List

Open `octra.tokenlist.json` and add your token to the `tokens` array:

```json
{
  "network": "octra-testnet",
  "address": "octYOURTOKENADDRESSxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "symbol": "MYT",
  "name": "My Token",
  "decimals": 18,
  "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/myt.png",
  "tags": ["defi"],
  "extensions": {
    "website": "https://mytoken.com",
    "description": "My awesome DeFi token for XYZ",
    "twitter": "https://twitter.com/mytoken",
    "telegram": "https://t.me/mytoken"
  }
}
```

**Fill in YOUR details:**
- `address`: Your token contract address (47 chars, starts with `oct`)
- `symbol`: Token ticker (max 20 chars)
- `name`: Full token name (max 40 chars)
- `decimals`: Token decimals (usually 18 or 6)
- `logoURI`: Update the path with your symbol
- `tags`: Choose from: `defi`, `stablecoin`, `gaming`, `nft`, `meme`, `governance`
- `extensions`: Add your links

#### 4.3 Update Version

In `octra.tokenlist.json`, increment the **minor** version:

```json
"version": {
  "major": 1,
  "minor": 1,  // ← Increment this
  "patch": 0
}
```

#### 4.4 Update Timestamp

Update to current UTC time:

```json
"timestamp": "2025-10-22T18:30:00.000Z"  // ← Current UTC time
```

---

### Step 5: Validate and Submit

#### 5.1 Validate Your Changes

```bash
# Run validation
npm test
```

**You should see:**
```
Token list is valid!
Token List Statistics:
   Name: 0xio Default Token List
   Version: 1.1.0
   Total Tokens: X
   No duplicate addresses
   All tokens have logo URIs
   All addresses valid
All validations passed!
```

#### 5.2 Format Your Code

```bash
npm run format
```

#### 5.3 Commit Your Changes

```bash
git add .
git commit -m "Add [SYMBOL] token - [TOKEN_NAME]"
git push origin main
```

#### 5.4 Create Pull Request

1. Go to: https://github.com/0xio-xyz/Token-lists
2. Click "New Pull Request"
3. Click "compare across forks"
4. Select your fork
5. Fill in the PR template (below)
6. Submit!

---

##  Pull Request Template

Use this template when creating your PR:

```markdown
## Add [TOKEN_NAME] ([SYMBOL])

### Token Information
- **Name**: Token Name
- **Symbol**: SYMBOL
- **Decimals**: 18
- **Contract**: oct1abc123...
- **Network ID**: 2 (Testnet)

### Links
- **Website**: https://token.com
- **Twitter**: https://twitter.com/token
- **Telegram**: https://t.me/token
- **Contract on Explorer**: https://octrascan.io/address/oct1abc123...

### Checklist
- [ ] Token deployed on Octra Testnet (Network ID 2)
- [ ] Contract verified on OctraScan
- [ ] Logo added (256x256 PNG, <100KB)
- [ ] All required fields included
- [ ] Validation passed (`npm test`)
- [ ] Version incremented
- [ ] Timestamp updated

### Description
Brief description of your token and what it's used for.

### Use Case
How will your token be used on 0xio DEX?

---

I confirm this is a legitimate token and I have the authority to submit it.
```

---

##  Complete Field Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `network` | string | Network identifier | `"octra-testnet"` |
| `address` | string | Token contract address | `octABC...` |
| `symbol` | string | Token ticker (max 20) | `MYT` |
| `name` | string | Full token name (max 40) | `My Token` |
| `decimals` | number | Token decimals (0-255) | `18` |

### Recommended Fields

| Field | Type | Description |
|-------|------|-------------|
| `logoURI` | string | URL to token logo |
| `tags` | array | Category tags |
| `extensions.website` | string | Official website |
| `extensions.description` | string | Token description |
| `extensions.twitter` | string | Twitter URL |
| `extensions.telegram` | string | Telegram URL |

---

##  Available Tags

Choose tags that best describe your token:

- **`defi`** - DeFi protocols, lending, staking
- **`stablecoin`** - USD or asset-pegged tokens
- **`gaming`** - Gaming and metaverse tokens
- **`nft`** - NFT platform tokens
- **`meme`** - Community/meme tokens
- **`governance`** - DAO governance tokens
- **`wrapped`** - Wrapped tokens from other chains

---

## Validation Checklist

Before submitting, ensure:

- [ ] Token deployed on Octra Testnet (Network ID 2)
- [ ] Contract verified on [OctraScan](https://octrascan.io)
- [ ] Address is 47 characters, starts with `oct1`
- [ ] Symbol is uppercase, max 20 characters
- [ ] Logo is 256x256 PNG, <100KB
- [ ] Logo named correctly (`symbol.png` lowercase)
- [ ] All required fields filled
- [ ] `npm test` passes successfully
- [ ] Version incremented (minor version)
- [ ] Timestamp updated to current UTC
- [ ] No duplicate addresses
- [ ] Valid JSON format

---

## Common Mistakes

### Wrong Network
```json
"chainId": 1  // WRONG! Octra testnet uses chainId 2
```
```json
"network": "octra-testnet"  // CORRECT!
```

### Wrong Address Format
```json
"address": "0x123..."  // WRONG! That's Ethereum
```
```json
"address": "octABC..."  // CORRECT! 47 chars total
```

### Logo Not Found
```json
"logoURI": "https://mysite.com/logo.png"  // WRONG! Not accessible
```
```json
"logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/myt.png"  // CORRECT!
```

### Forgot Version Bump
```json
"version": { "major": 1, "minor": 0, "patch": 0 }  // WRONG! Didn't increment
```
```json
"version": { "major": 1, "minor": 1, "patch": 0 }  // CORRECT! Incremented
```

---

## Troubleshooting

### Validation Fails

```bash
# Run validation with detailed output
npm test

# Check specific errors:
# - Address format (must be oct + 44 chars)
# - Duplicate addresses
# - Missing required fields
# - Invalid JSON syntax
```

### Logo Issues

```bash
# Check logo file size
ls -lh logos/myt.png

# Should be < 100KB
# If too large, compress at https://squoosh.app
```

### JSON Syntax Errors

Use a JSON validator:
- https://jsonlint.com
- Or install VSCode JSON extension

---

## Need Help?

- **Questions**: Open a [GitHub Discussion](https://github.com/0xio-xyz/Token-lists/discussions)
- **Issues**: Report on [GitHub Issues](https://github.com/0xio-xyz/Token-lists/issues)
- **Email**: 0xgery@proton.me

---

## Review Process

1. **Automated Checks** (~1 minute)
   - JSON validation
   - Address format check
   - Logo accessibility
   - No duplicates

2. **Manual Review** (1-3 days)
   - Contract verification
   - Token legitimacy
   - Logo quality
   - Metadata accuracy

3. **Approval & Merge**
   - PR approved and merged
   - Token available in next release
   - Appears on 0xio DEX and Wallet

---

## After Approval

Once your token is approved:

1. **0xio Wallet** - Users can see and send your token
2. **0xio DEX** - Your token is available for trading
3. **All DApps** - That import this token list

**Token List URL:**
```
https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/octra.tokenlist.json
```

---

## Additional Resources

- [Token List Schema](./schema.json)
- [TypeScript Types](./src/types.ts)
- [Example Tokens](./examples/custom-list.json)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [Octra Architecture](../docs/OCTRA_ARCHITECTURE.md)

---

**Ready to add your token? Let's go!**
