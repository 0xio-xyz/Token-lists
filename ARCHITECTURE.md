# Architecture & Project Relationship

## Project Structure

```
┌─────────────────────────────────────────────────────────┐
│              Octra Network (Blockchain)                 │
│         Layer 1 Blockchain - Octra Team                 │
│                                                         │
│  • Native Token: OCT (6 decimals)                      │
│  • RPC: https://octra.network                          │
│  • Explorer: https://octrascan.io                      │
│  • Features: Private transfers, encrypted balances     │
└─────────────────────────────────────────────────────────┘
                            ↑
                            │
                    Built on top of
                            │
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   0xio Project                          │
│          Wallet & Tools for Octra Network               │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  0xio Wallet (Browser Extension)                  │ │
│  │  • Non-custodial wallet                          │ │
│  │  • Multi-wallet support                          │ │
│  │  • Privacy features                              │ │
│  │  • DApp integration                              │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  0xio SDK (@0xgery/0xio-sdk)                      │ │
│  │  • TypeScript SDK for DApp developers            │ │
│  │  • Connect to 0xio Wallet                        │ │
│  │  • Send transactions, read balance               │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Token Lists (This Repository)                    │ │
│  │  • Standardized token registry                    │ │
│  │  • Used by 0xio Wallet                           │ │
│  │  • Community-maintained                          │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  0xio Web (Website)                               │ │
│  │  • Marketing site                                 │ │
│  │  • Documentation                                  │ │
│  │  • https://0xio.xyz                              │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ↑
                            │
                    Used by DApps
                            │
                            ↓
┌─────────────────────────────────────────────────────────┐
│              Third-Party DApps                          │
│                                                         │
│  • DEXs, NFT Marketplaces, Games, etc.                 │
│  • Integrate using 0xio SDK                            │
│  • Connect to users' 0xio Wallets                      │
│  • Use Token Lists for token metadata                  │
└─────────────────────────────────────────────────────────┘
```

## Responsibilities

### Octra Network Team
- **Blockchain Infrastructure**
  - Layer 1 blockchain development
  - Consensus mechanism
  - Network nodes and validators
  - OCT token (native blockchain token)
  - Block explorer (octrascan.io)
  - RPC endpoints
  - Core protocol features (private transfers, encrypted balances)

### 0xio Team (Your Project)
- **User-Facing Tools**
  - 0xio Wallet browser extension
  - 0xio SDK for developers
  - Token list infrastructure
  - Documentation and guides
  - DApp integration support
  - User experience and UI

### Community
- **Token Contributions**
  - Submit tokens to registry
  - Maintain token metadata
  - Report issues
  - Create custom token lists

## Token List Purpose

This token list serves as a **standardized registry** for tokens deployed on the Octra Network blockchain, used by:

1. **0xio Wallet** - Display tokens in user interface
2. **DApps** - Discover available tokens
3. **Developers** - Integration reference
4. **Users** - Verify legitimate tokens

## Data Flow

```
Token Deployed on Octra Network
         ↓
Token added to 0xio Token List (this repo)
         ↓
0xio Wallet fetches token list
         ↓
User sees token in wallet interface
         ↓
User can interact with token
```

## Key Points

1. **Octra Network ≠ 0xio**
   - Octra Network is the blockchain (Layer 1)
   - 0xio is a wallet/tooling project built on Octra

2. **OCT Token**
   - Created and managed by Octra Network team
   - Native blockchain token (like ETH on Ethereum)
   - Used for gas fees on Octra Network
   - 0xio Wallet just provides interface to use it

3. **Token List Scope**
   - Lists tokens deployed on Octra Network
   - Maintained by 0xio for the wallet ecosystem
   - Community can contribute
   - Follows industry standards (Uniswap-style)

4. **Integration**
   - DApps on Octra Network can use 0xio SDK
   - Users access DApps through 0xio Wallet
   - Token metadata comes from this token list
   - Blockchain operations happen on Octra Network

## Analogy

Think of it like:
- **Octra Network** = Ethereum (the blockchain)
- **0xio Wallet** = MetaMask (wallet for the blockchain)
- **0xio SDK** = ethers.js (SDK for developers)
- **Token Lists** = Uniswap Token Lists (token registry)

## Links

### Octra Network (Blockchain)
- Network: https://octra.network
- Explorer: https://octrascan.io
- Native Token: OCT

### 0xio (Wallet & Tools)
- Website: https://0xio.xyz
- Wallet: Chrome Extension
- SDK: @0xgery/0xio-sdk
- Token Lists: This repository

---

This architecture allows 0xio to provide excellent user experience and developer tools while Octra Network focuses on the core blockchain infrastructure.
