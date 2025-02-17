import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as nearAPI from "near-api-js";

const { keyStores, connect, WalletConnection, Contract } = nearAPI;

// Configuration for NEAR testnet
const nearConfig = {
  networkId: "default",
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  contractName: "omniagent_hub.testnet" // Replace with your deployed contract account
};

const App = () => {
  const [wallet, setWallet] = useState<WalletConnection | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const initNear = async () => {
      const keyStore = new keyStores.BrowserLocalStorageKeyStore();
      const near = await connect({ ...nearConfig, keyStore });
      const walletConnection = new WalletConnection(near, null);
      setWallet(walletConnection);
      setLoggedIn(walletConnection.isSignedIn());

      if (walletConnection.isSignedIn()) {
        const contractInstance = new Contract(
          walletConnection.account(),
          nearConfig.contractName,
          {
            viewMethods: [],
            changeMethods: [
              'deploy_defi_agent',
              'deploy_social_media_agent',
              'deploy_absurd_agent',
              'deploy_aurora_chain',
              'deploy_hot_wallet_integration',
              'deploy_bitte_agent',
              'deploy_bitcoin_agent',
              'deploy_crosschain_agent'
            ],
          }
        );
        setContract(contractInstance);
      }
    };
    initNear();
  }, []);

  const login = () => {
    wallet?.requestSignIn(nearConfig.contractName);
  };

  const logout = () => {
    wallet?.signOut();
    setLoggedIn(false);
    window.location.reload();
  };

  const callAgentMethod = async (methodName: string) => {
    if (!contract) return;
    try {
      // Call the chosen method with default gas and deposit
      await (contract as any)[methodName]({});
      alert(`Called ${methodName} successfully`);
    } catch (err) {
      console.error(err);
      alert(`Error calling ${methodName}`);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>OmniAgent Hub Frontend</h1>
      {loggedIn ? (
        <div>
          <button onClick={logout}>Logout</button>
          <div style={{ margin: "1rem 0" }}>
            <button onClick={() => callAgentMethod("deploy_defi_agent")}>Deploy DeFi Agent</button>
            <button onClick={() => callAgentMethod("deploy_social_media_agent")}>Deploy Social Media Agent</button>
            <button onClick={() => callAgentMethod("deploy_absurd_agent")}>Deploy Absurd Agent</button>
            <button onClick={() => callAgentMethod("deploy_aurora_chain")}>Deploy Aurora Chain</button>
            <button onClick={() => callAgentMethod("deploy_hot_wallet_integration")}>Deploy HOT Wallet Integration</button>
            <button onClick={() => callAgentMethod("deploy_bitte_agent")}>Deploy Bitte Agent</button>
            <button onClick={() => callAgentMethod("deploy_bitcoin_agent")}>Deploy Bitcoin Agent</button>
            <button onClick={() => callAgentMethod("deploy_crosschain_agent")}>Deploy Cross-chain Agent</button>
          </div>
        </div>
      ) : (
        <button onClick={login}>Login with NEAR Wallet</button>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 