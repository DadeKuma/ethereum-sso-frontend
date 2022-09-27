import { useMetaMask } from 'metamask-react';
import './App.css';
import MetamaskConnectButton from './components/MetamaskConnectButton';
import MetamaskSignInButton from './components/MetamaskSignInButton';
import MetamaskSignUpButton from './components/MetamaskSignUpButton';

function App() {
  const { status } = useMetaMask();

  return (
    <div className="App">
      <header className="App-header">
        {
          status !== "connected" ? <MetamaskConnectButton />
            :
            <>
              <MetamaskSignUpButton />
              <MetamaskSignInButton />
            </>
        }

      </header>
    </div>
  );
}

export default App;
