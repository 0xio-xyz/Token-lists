# Contributing to 0xio Token Lists

Thank you for your interest in contributing to the 0xio Token Lists! This guide will help you add or update tokens.

## How to Add a Token

### Prerequisites

1. Your token must be deployed on **Octra Network blockchain**
2. Token contract should be verified on [OctraScan](https://octrascan.io)
3. Have a high-quality logo (PNG, 256x256px recommended)
4. Ensure your token follows Octra Network token standards

**Note:** 0xio Wallet is built on top of Octra Network blockchain. This token list is for tokens deployed on the Octra Network.

### Steps to Add a Token

1. **Fork the Repository**
   ```bash
   git clone https://github.com/0xio-xyz/Token-lists.git
   cd Token-lists
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Add Your Token Logo**
   - Add a PNG file to `logos/` directory
   - Naming convention: `{symbol}.png` (lowercase)
   - Size: 256x256px (recommended)
   - Format: PNG with transparent background
   - Example: `logos/usdt.png`

4. **Update Token List**

   Edit `octra.tokenlist.json` and add your token to the `tokens` array:

   ```json
   {
     "network": "octra-testnet",
     "address": "octYOURCONTRACTADDRESSxxxxxxxxxxxxxxxxxxxxxxxxx",
     "symbol": "YOUR",
     "name": "Your Token Name",
     "decimals": 18,
     "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/your.png",
     "tags": ["defi"],
     "extensions": {
       "website": "https://yourtoken.com",
       "description": "Your token description",
       "twitter": "https://twitter.com/yourtoken",
       "coingeckoId": "your-token-id"
     }
   }
   ```

5. **Update Version**

   Increment the version in `octra.tokenlist.json`:
   - **Patch**: For metadata updates (logo, description, etc.)
   - **Minor**: For adding new tokens
   - **Major**: For removing tokens or changing addresses

6. **Update Timestamp**

   Update the `timestamp` field to current UTC time:
   ```json
   "timestamp": "2025-10-22T12:00:00.000Z"
   ```

7. **Validate Your Changes**
   ```bash
   npm test
   ```

   This will validate your token list against the schema.

8. **Format Your Code**
   ```bash
   npm run format
   ```

9. **Submit Pull Request**
   - Commit your changes
   - Push to your fork
   - Open a PR with description of the token

### Token Requirements

#### Required Fields
- `network`: Octra network identifier ("octra-testnet")
- `address`: Token contract address (or "native" for OCT)
- `symbol`: Token ticker (max 20 chars, alphanumeric)
- `name`: Full token name (max 40 chars)
- `decimals`: Number of decimals (0-255)

#### Recommended Fields
- `logoURI`: High-quality logo URL
- `tags`: Relevant tags (native, stablecoin, defi, gaming, nft)
- `extensions.website`: Official website
- `extensions.description`: Brief description
- `extensions.twitter`: Twitter profile
- `extensions.coingeckoId`: CoinGecko ID (if listed)

### Logo Requirements

- **Format**: PNG with transparency
- **Size**: 256x256 pixels (recommended)
- **File Size**: < 100KB
- **Quality**: High resolution, clean design
- **Background**: Transparent
- **Naming**: `{symbol}.png` (lowercase)

### Tag Definitions

Available tags:
- `native`: Native blockchain token (OCT)
- `wrapped`: Wrapped tokens from other chains
- `stablecoin`: USD or stablecoin pegged tokens
- `defi`: DeFi protocol tokens
- `gaming`: Gaming and metaverse tokens
- `nft`: NFT platform tokens

### Review Process

1. **Automated Checks**
   - JSON schema validation
   - No duplicate addresses
   - Valid logo URLs
   - Proper formatting

2. **Manual Review**
   - Token legitimacy verification
   - Contract verification on OctraScan
   - Logo quality check
   - Metadata accuracy

3. **Approval**
   - Approved PRs will be merged
   - Changes will be reflected in the next release

### Updating Existing Tokens

To update token metadata:

1. Find your token in `octra.tokenlist.json`
2. Update the relevant fields
3. Increment patch version
4. Update timestamp
5. Run validation
6. Submit PR with clear description of changes

### Removing Tokens

Token removal requires:
- Valid reason (scam, deprecated, migrated)
- Major version bump
- Clear communication to users

### Common Issues

**Validation Errors**
```bash
# Check schema validation
npm test

# View detailed errors
npm run validate
```

**Address Format**
- Must be 47 characters
- Must start with "oct1"
- Or use "native" for OCT

**Decimals**
- Check your token contract
- Common: 6, 18
- OCT uses 6 decimals

### Getting Help

- **Issues**: Open an issue on GitHub
- **Questions**: Discuss in GitHub Discussions
- **Contact**: team@0xio.xyz

### Best Practices

1. **Double-check everything** - Wrong address means lost funds
2. **Use verified contracts** - Only verified contracts on OctraScan
3. **High-quality logos** - Professional appearance matters
4. **Accurate information** - Keep metadata current
5. **Test first** - Validate before submitting

### Example PR Description

```markdown
## Add [TOKEN_NAME] ([SYMBOL])

**Token Information:**
- Name: Token Name
- Symbol: SYMBOL
- Decimals: 18
- Contract: oct1abc123...
- Website: https://token.com

**Verification:**
- [x] Contract verified on OctraScan
- [x] Logo added (256x256 PNG)
- [x] All required fields included
- [x] Validation passed
- [x] Version incremented

**Additional Notes:**
Brief description of the token and why it should be added.
```

## Code of Conduct

- Be respectful and professional
- Provide accurate information
- Don't submit scam or fake tokens
- Follow the review process patiently

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping build the 0xio Token Lists! 
