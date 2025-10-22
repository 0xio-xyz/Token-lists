/**
 * 0xio Token Lists
 * TypeScript utilities for working with token lists
 */

export * from './types';
export { default as tokenList } from '../octra.tokenlist.json';

import tokenListData from '../octra.tokenlist.json';
import { TokenInfo, TokenList } from './types';

/**
 * Get all tokens from the default list
 */
export function getAllTokens(): TokenInfo[] {
  return tokenListData.tokens as TokenInfo[];
}

/**
 * Find token by symbol
 */
export function findTokenBySymbol(symbol: string): TokenInfo | undefined {
  return getAllTokens().find(
    (token) => token.symbol.toUpperCase() === symbol.toUpperCase()
  );
}

/**
 * Find token by address
 */
export function findTokenByAddress(address: string): TokenInfo | undefined {
  return getAllTokens().find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
}

/**
 * Get tokens by tag
 */
export function getTokensByTag(tag: string): TokenInfo[] {
  return getAllTokens().filter(
    (token) => token.tags && token.tags.includes(tag)
  );
}

/**
 * Get tokens by network
 */
export function getTokensByNetwork(network: string): TokenInfo[] {
  return getAllTokens().filter((token) => token.network === network);
}

/**
 * Validate token address format
 */
export function isValidOctraAddress(address: string): boolean {
  if (address === 'native') return true;
  return address.startsWith('oct') && address.length === 47 && /^oct[A-Za-z0-9]{44}$/.test(address);
}

/**
 * Get the full token list
 */
export function getTokenList(): TokenList {
  return tokenListData as TokenList;
}
