import React from 'react'
import EmptyWallet from './EmptyWallet'
import TabBar from './TabBar'

const WalletSection = () => {
  return (
    <div className="mx-8 mt-20 lg:mx-36 lg:mt-40">
      <h1 className="text-6xl text-white font-light">Your Wallet</h1>
      <EmptyWallet />
      <TabBar /> 
    </div>
  )
}

export default WalletSection