import React from 'react'
import Transaction from './Transaction'
import YourWallet from './YourWallet'

const WalletSection = () => {
  return (
    <div className="mt-40">
      <YourWallet />
      <Transaction />
    </div>
  )
}

export default WalletSection