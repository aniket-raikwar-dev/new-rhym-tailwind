import React from 'react'
import TabBar from './TabBar'
import Transaction from './Transaction'
import YourWallet from './YourWallet'

const WalletSection = () => {
  return (
    <div className="mx-8 mt-20 lg:mx-36 lg:mt-40">
      <h1 className="text-6xl text-white font-light">Your Wallet</h1>
      <TabBar /> 
    </div>
  )
}

export default WalletSection