import React from 'react'
import IndividualCard from '../CreatorProfile/IndividualCard'
import Transaction from './Transaction'

const YourWallet = () => {
  return (
    <div className="">
      <p className="mt-12 text-white text-2xl">Purchases</p>
      <div className="grid grid-rows-1 w-full">
         <div className="grid grid-cols-1 gap-x-16 justify-between lg:grid-cols-3">
          <IndividualCard head="Rare" num1="248" num2="400" />
          <IndividualCard head="SuperRare" num1="15" num2="20" />
         </div>
      </div>
      <Transaction />
    </div>
  )
}

export default YourWallet