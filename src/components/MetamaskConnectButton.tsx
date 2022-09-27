import { useMetaMask } from "metamask-react";


export default function MetamaskConnectButton() {
  const { connect } = useMetaMask();

  return (
    <button onClick={connect}>
      <span>Connect Wallet</span>
    </button>
  );
}
