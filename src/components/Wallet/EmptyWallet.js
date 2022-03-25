import React from 'react'
import EmptyWalletImg from '../../images/empty-wallet.png';

const EmptyWallet = () => {
  return (
    <div className="mt-20 w-full flex flex-col items-center">
      <img src={EmptyWalletImg} alt="empty-wallet" />
      <p className="text-white text-lg lg:text-2xl mt-12">You don't have any transactions to show</p>
      <div className="w-40 h-12 flex justify-evenly items-center cursor-pointer my-8 rounded-3xl border-2 border-pink-600">
         <p className="text-white">Explore NFTs</p>
       </div>
    </div>   
  )
}

export default EmptyWallet