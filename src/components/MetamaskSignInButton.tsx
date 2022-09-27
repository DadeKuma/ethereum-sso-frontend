import { useEffect, useState } from "react";
import Web3 from "web3";
import { nonce, signIn } from "../api/auth";


export default function MetamaskSignInButton() {
  const [coinbase, setCoinbase] = useState("");
  const [web3, setWeb3] = useState<Web3>();

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
    web3?.eth.getCoinbase().then(coinbase => setCoinbase(coinbase));
  }, []);

  const login = () => {
    nonce(coinbase).then((nonce) => {
      web3?.eth.personal.sign(nonce, coinbase, "")
        .then((signature) =>
          signIn(coinbase, signature));
    });
  };

  return (
    <button onClick={login}>
      <span>Sign In</span>
    </button>
  );
}
