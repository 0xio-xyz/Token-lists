# How to Add Your Token

Get your OAT token listed on 0xio Wallet and 0xio DEX.

## Prerequisites

1. Your token is deployed on Octra Network (mainnet or devnet)
2. You have the contract address (47 chars, starts with `oct`)
3. You have a token logo (256x256 PNG, transparent background, max 100KB)

## Step 1: Fork and Clone

```bash
# Fork on GitHub, then clone
git clone https://github.com/YOUR_USERNAME/Token-lists.git
cd Token-lists
```

## Step 2: Add Your Logo

Place your logo in the `logos/` directory:

```
logos/MYTOKEN.png
```

Requirements:
- 256x256 pixels
- PNG format with transparent background
- Max 100KB file size
- Clean, recognizable design

## Step 3: Add Token to the List

Open `octra.tokenlist.json` and add your token to the `tokens` array:

```json
{
  "network": "octra-mainnet",
  "address": "octYourContractAddressHere1234567890abcdefgh",
  "symbol": "MYTOKEN",
  "name": "My Token",
  "decimals": 6,
  "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/MYTOKEN.png",
  "tags": ["oat", "dex"],
  "extensions": {
    "website": "https://mytoken.com",
    "description": "Brief description of your token",
    "explorer": "https://lite.octrascan.io/address.html?addr=octYourContractAddressHere1234567890abcdefgh",
    "isNative": false,
    "isPrivate": false,
    "isTestnet": false,
    "blockchain": "Octra Network"
  }
}
```

## Step 4: Update Version and Timestamp

In the same file, update the top-level version and timestamp:

```json
{
  "version": {
    "major": 1,
    "minor": 5,
    "patch": 0
  },
  "timestamp": "2026-04-06T00:00:00.000Z"
}
```

- Increment `minor` when adding a new token
- Set `timestamp` to the current UTC time in ISO 8601 format

To get the current timestamp, run one of these in your terminal:

```bash
# macOS / Linux
date -u +"%Y-%m-%dT%H:%M:%S.000Z"

# Node.js
node -e "console.log(new Date().toISOString())"

# Python
python3 -c "from datetime import datetime, timezone; print(datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.000Z'))"
```

Example output: `2026-04-06T12:00:00.000Z`

## Step 5: Submit a Pull Request

```bash
git add octra.tokenlist.json logos/MYTOKEN.png
git commit -m "Add MYTOKEN to token list"
git push origin main
```

Then open a Pull Request on GitHub with this info:

```
## Token Addition Request

**Symbol:** MYTOKEN
**Name:** My Token
**Network:** octra-mainnet
**Contract Address:** octYourContractAddressHere1234567890abcdefgh
**Decimals:** 6
**Website:** https://mytoken.com

### Checklist
- [ ] Token deployed and verified on Octra Network
- [ ] Logo added to logos/ (256x256 PNG)
- [ ] Token entry added to octra.tokenlist.json
- [ ] Version minor incremented
- [ ] Timestamp updated
- [ ] Address is valid (47 chars, starts with oct)
- [ ] No duplicate entries
```

## After Approval

Once merged, your token will automatically appear in:
- **0xio Wallet** (token picker on Send screen)
- **0xio DEX** (trading pairs)

## Field Reference

### Required

| Field | Description | Example |
|-------|-------------|---------|
| `network` | `octra-mainnet` or `octra-devnet` | `"octra-mainnet"` |
| `address` | Contract address, 47 chars starting with `oct` | `"octAbc123..."` |
| `symbol` | Ticker, max 20 chars, uppercase | `"MYTOKEN"` |
| `name` | Full name, max 40 chars | `"My Token"` |
| `decimals` | Decimal places, commonly 6 | `6` |

### Optional

| Field | Description |
|-------|-------------|
| `logoURI` | URL to 256x256 PNG logo |
| `tags` | Array: `native`, `oat`, `private`, `wrapped`, `dex`, `mainnet`, `devnet` |
| `extensions.website` | Official website |
| `extensions.description` | Brief description |
| `extensions.explorer` | Block explorer link |
| `extensions.twitter` | Twitter/X profile |
| `extensions.telegram` | Telegram group |

## Common Mistakes

- Address not exactly 47 characters
- Address doesn't start with `oct`
- Duplicate address already in the list
- Logo larger than 100KB or wrong dimensions
- Missing required fields
- Forgot to increment version number
- Using `octra-testnet` instead of `octra-devnet`

## Questions?

Open an issue at https://github.com/0xio-xyz/Token-lists/issues or email team@0xio.xyz.
