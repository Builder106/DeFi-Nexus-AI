# DecentraTrader

DecentraTrader is a decentralized trading agent built for the One Trillion Agents Hackathon (DeFi Agents track). The project integrates with NEAR Protocol and demonstrates a fully decentralized autonomous agent for portfolio management and market making.

## Features:
- NEAR Smart Contract (Rust) for managing user funds and executing trade orders.
- Off-chain AI-driven trading agent (Python) that analyzes market data and performs automated trade decisions.
- Simulated market making and trade execution.
- Open source under the MIT License.

## Architecture:
- **Contract:** Built with Rust using NEAR SDK. The contract allows depositing funds and executing simulated trade orders.
- **Trading Agent:** A Python bot that interacts with the contract via NEAR CLI to deposit funds and execute trades based on simple algorithmic decisions.

## Getting Started:
1. Deploy the smart contract on NEAR Testnet.
2. Set up environment variables:
   - `NEAR_ACCOUNT`: Your NEAR account id.
   - `CONTRACT_ID`: Your deployed contract id (default is decentratrader.testnet).
3. Run the Python trading agent:

   ```bash
   python agent/trader_bot.py
   ```

## Demonstration:
A demonstration video showcasing the project in action is available [here](https://www.youtube.com/link-to-demo).

## License:
This project is licensed under the MIT License.

## Additional Bounty Agents

This project now includes several additional agents that address various sponsored bounties. Each of these agents can be found in the `agent/` directory and can be run individually. Below is an overview:

- **Aurora Agent (`agent/aurora_agent.py`):** Simulates deploying a dedicated blockchain on Aurora Cloud Console with various governance styles. Make sure to add the comment "1T Agents Hackathon" in Aurora Cloud Console's Additional Information when deploying.

- **HOT Wallet Agent (`agent/hot_wallet_agent.py`):** Demonstrates HOT Omni token functionality by simulating deposits and withdrawals using the HOT SDK or by interacting with a HOT Omni smart contract.

- **Bitte Agent (`agent/bitte_agent.py`):** Implements chain abstraction functionality by simulating a token swap (e.g., swapping USDC for VIRTUAL tokens) via a smart contract call.

- **Cross-chain Agent (`agent/cross_chain_agent.py`):** Simulates autonomous cross-chain trading using NEAR Intents. It demonstrates multi-chain swaps (e.g., BTC, ETH, SOL, DOGE, TRUMP) in a single flow.

- **Bitcoin Agent (`agent/bitcoin_agent.py`):** Uses simulated chain signatures to create and sign Bitcoin transactions, demonstrating integration with Bitcoin L1.

- **Twitter/X Agent (`agent/twitter_agent.py`):** Simulates a Twitter bot interaction where users can trigger transactions (e.g., bet escrow flows) via Twitter mentions. The bot responds with a transaction link.

- **VeaxFlow Agent (`agent/veaxflow_agent.py`):** Integrates with the VeaxFlow liquidity management API to fetch real-time liquidity data and suggest dynamic adjustments for high-volume liquidity providers.

- **Questflow Agent (`agent/questflow_agent.py`):** Simulates integration with the Questflow developer platform, demonstrating strategic trading, airdrop, and data analysis capabilities.

- **Absurd Agent (`agent/absurd_agent.py`):** Pushes the boundaries of creative AI experiments with absurd market simulations and unexpected outcomes.

- **Nuffle Labs Agent (`agent/nuffle_agent.py`):** Demonstrates integration with Nuffle Labs' technology, simulating API interactions for advanced tech integrations.

- **Frax Finance Agent (`agent/frax_agent.py`):** Simulates integration with Frax Finance via API calls, showcasing potential for innovative DeFi applications.

### Running the Agents

To run any of the agents, execute the corresponding Python script. For example:

```bash
python agent/aurora_agent.py
```

Make sure to set any necessary environment variables (e.g., `NEAR_ACCOUNT`, `CONTRACT_ID`, `HOT_CONTRACT`) for agents that interact with NEAR smart contracts. 