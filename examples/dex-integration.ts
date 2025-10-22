/**
 * Example: How to use 0xio Token Lists in your DEX
 */

import {
  getAllTokens,
  findTokenBySymbol,
  findTokenByAddress,
  getTokensByTag,
  TokenInfo,
} from '@0xio/token-lists';

// Example 1: Load all tokens for DEX interface
function loadTokensForDEX() {
  const tokens = getAllTokens();

  console.log(`Loaded ${tokens.length} tokens for DEX`);

  tokens.forEach((token: TokenInfo) => {
    console.log(`${token.symbol}: ${token.name} (${token.decimals} decimals)`);
  });

  return tokens;
}

// Example 2: Find token for swap pair
function createSwapPair(tokenASymbol: string, tokenBSymbol: string) {
  const tokenA = findTokenBySymbol(tokenASymbol);
  const tokenB = findTokenBySymbol(tokenBSymbol);

  if (!tokenA || !tokenB) {
    throw new Error('Token not found in list');
  }

  console.log(`Creating swap pair: ${tokenA.symbol}/${tokenB.symbol}`);

  return {
    tokenA,
    tokenB,
    pairName: `${tokenA.symbol}-${tokenB.symbol}`,
  };
}

// Example 3: Validate user-inputted address
function validateTokenAddress(address: string): TokenInfo | null {
  const token = findTokenByAddress(address);

  if (!token) {
    console.warn('Token not in official list - may be unverified');
    return null;
  }

  console.log(`Verified token: ${token.symbol} (${token.name})`);
  return token;
}

// Example 4: Get tokens by category for filtering
function getTokensByCategory() {
  const stablecoins = getTokensByTag('stablecoin');
  const defiTokens = getTokensByTag('defi');
  const nftTokens = getTokensByTag('nft');

  console.log(`Stablecoins: ${stablecoins.length}`);
  console.log(`DeFi tokens: ${defiTokens.length}`);
  console.log(`NFT tokens: ${nftTokens.length}`);

  return {
    stablecoins,
    defiTokens,
    nftTokens,
  };
}

// Example 5: Format token for display
function formatTokenDisplay(symbol: string) {
  const token = findTokenBySymbol(symbol);

  if (!token) {
    return null;
  }

  return {
    symbol: token.symbol,
    name: token.name,
    logo: token.logoURI,
    decimals: token.decimals,
    address: token.address,
    website: token.extensions?.website,
    description: token.extensions?.description,
  };
}

// Example 6: Calculate token amounts
function calculateSwapAmount(
  inputSymbol: string,
  outputSymbol: string,
  inputAmount: number
) {
  const inputToken = findTokenBySymbol(inputSymbol);
  const outputToken = findTokenBySymbol(outputSymbol);

  if (!inputToken || !outputToken) {
    throw new Error('Token not found');
  }

  // Convert to smallest unit (considering decimals)
  const inputRaw = BigInt(Math.floor(inputAmount * 10 ** inputToken.decimals));

  console.log(`Input: ${inputAmount} ${inputToken.symbol}`);
  console.log(`Raw amount: ${inputRaw}`);

  // Your DEX swap calculation here...

  return {
    inputToken,
    outputToken,
    inputRaw,
  };
}

// Example 7: React component example
interface TokenSelectProps {
  onSelect: (token: TokenInfo) => void;
}

function TokenSelect({ onSelect }: TokenSelectProps) {
  const tokens = getAllTokens();

  return (
    <div>
      <h3>Select Token</h3>
      {tokens.map((token) => (
        <div key={token.address} onClick={() => onSelect(token)}>
          <img src={token.logoURI} alt={token.symbol} width="32" />
          <span>{token.symbol}</span>
          <span>{token.name}</span>
        </div>
      ))}
    </div>
  );
}

// Example 8: Filter popular trading pairs
function getPopularPairs() {
  const oct = findTokenBySymbol('OCT');
  const stablecoins = getTokensByTag('stablecoin');
  const defi = getTokensByTag('defi');

  // Create pairs with OCT
  const octPairs = [...stablecoins, ...defi].map((token) => ({
    base: oct,
    quote: token,
    pair: `${oct?.symbol}/${token.symbol}`,
  }));

  return octPairs;
}

// Run examples
console.log('=== DEX Integration Examples ===\n');

console.log('1. Load all tokens:');
loadTokensForDEX();

console.log('\n2. Create swap pair:');
createSwapPair('OCT', 'USDT');

console.log('\n3. Validate address:');
validateTokenAddress('oct1abc123...');

console.log('\n4. Get tokens by category:');
getTokensByCategory();

console.log('\n5. Format for display:');
console.log(formatTokenDisplay('OCT'));

console.log('\n6. Calculate swap:');
calculateSwapAmount('OCT', 'USDT', 10.5);

console.log('\n7. Get popular pairs:');
console.log(getPopularPairs());
