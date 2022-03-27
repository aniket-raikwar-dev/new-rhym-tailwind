import './App.css';
import CreatorProfile from './components/CreatorProfile/CreatorProfile';
import LoginContent from './components/Login/LoginContent';
import SuperRare from './components/SuperRare/SuperRare';
import WalletSection from './components/Wallet/WalletSection';

function App() {
  return (
    
    <div className="bg-zinc-900">
      <CreatorProfile />
      <SuperRare /> 
      <WalletSection /> 
      <LoginContent /> 
    </div>

  );
}

export default App;
