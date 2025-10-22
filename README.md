# Token-lists
0xio Token Lists is a specification for lists of token metadata (e.g. address, decimals, ...) that can be used by any dApp interfaces that needs one or more lists of tokens.

Anyone can create and maintain a token list, as long as they follow the specification.

Specifically an instance of a token list is a JSON blob that contains a list of Octra token metadata for use in dApp user interfaces. Token list JSON must validate against the JSON schema in order to be used in the Uniswap Interface. Tokens on token lists, and token lists themselves, are tagged so that users can easily find tokens.

