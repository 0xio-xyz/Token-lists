# Token Logos

This directory contains logo images for tokens in the 0xio Token List.

## Logo Requirements

- **Format**: PNG with transparent background
- **Size**: 256x256 pixels (recommended)
- **File Size**: < 100KB
- **Quality**: High resolution, clean design
- **Naming**: `{symbol}.png` (lowercase)

## Examples

```
oct.png       - Octra native token


```

## Naming Convention

Use the token symbol in lowercase:


- OCT → `oct.png`
- MyToken → `mytoken.png`

## Adding Logos

1. Prepare your logo (256x256 PNG)
2. Name it using lowercase symbol
3. Place in this directory
4. Reference in token list:
   ```json
   "logoURI": "https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/yourtoken.png"
   ```

## Testing Logo URLs

Before submitting, verify your logo URL works:
```
https://raw.githubusercontent.com/0xio-xyz/Token-lists/main/logos/{symbol}.png
```

Replace `{symbol}` with your lowercase token symbol.
