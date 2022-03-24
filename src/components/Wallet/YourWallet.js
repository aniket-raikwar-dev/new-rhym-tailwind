import React from 'react'
import WalletCard from './WalletCard'

const YourWallet = () => {
  return (
    <div className="mx-36">
      <h1 className="text-6xl text-white font-light">Your Wallet</h1>
      <p className="mt-12 text-white text-2xl">Purchases</p>
      <div className="flex">
        <WalletCard head="Rare" num="3" />
        <WalletCard head="Endgame" num="1" />
      </div>
    </div>
  )
}

export default YourWallet