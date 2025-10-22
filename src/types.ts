/**
 * Type definitions for 0xio Token Lists
 * Compatible with Octra Network
 */

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export interface TagDefinition {
  name: string;
  description: string;
}

export interface BridgeInfo {
  originChainId: number;
  originAddress: string;
  originSymbol: string;
}

export interface TokenExtensions {
  website?: string;
  description?: string;
  explorer?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  github?: string;
  coingeckoId?: string;
  coinmarketcapId?: string;
  isNative?: boolean;
  blockchain?: string;
  bridgeInfo?: BridgeInfo;
  [key: string]: any; // Allow custom extensions
}

export interface TokenInfo {
  network: string;
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  tags?: string[];
  extensions?: TokenExtensions;
}

export interface TokenList {
  name: string;
  description?: string;
  version: Version;
  timestamp: string;
  logoURI?: string;
  keywords?: string[];
  tags?: Record<string, TagDefinition>;
  tokens: TokenInfo[];
}

/**
 * Available tag identifiers
 */
export type TagIdentifier =
  | 'native'
  | 'wrapped'
  | 'stablecoin'
  | 'defi'
  | 'gaming'
  | 'nft'
  | 'meme'
  | 'governance';

/**
 * Network identifiers for Octra
 */
export enum NetworkId {
  TESTNET = 'octra-testnet',
  // MAINNET = 'octra-mainnet', // Coming soon
}

/**
 * Standard decimals for common token types
 */
export const STANDARD_DECIMALS = {
  DEFAULT: 18,
  OCT: 6,
  STABLECOIN: 6,
} as const;
