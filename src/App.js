import './App.css';
import CreatorProfile from './components/CreatorProfile/CreatorProfile';
import SuperRare from './components/SuperRare/SuperRare';
import WalletSection from './components/Wallet/WalletSection';

function App() {
  return (
    
    <div className="bg-zinc-900">
      <CreatorProfile />
      <SuperRare /> 
      <WalletSection />  
    </div>

  );
}

export default App;
