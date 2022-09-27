import { useEffect, useState } from "react";
import Web3 from "web3";
import { signUp } from "../api/auth";


export default function MetamaskSignUpButton() {
  const [coinbase, setCoinbase] = useState("");

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider);
    web3.eth.getCoinbase().then(coinbase => setCoinbase(coinbase));
  }, []);

  return (
    <button onClick={() => signUp(coinbase).then(msg => alert(msg))}>
      <span>Register</span>
    </button>
  );
}
