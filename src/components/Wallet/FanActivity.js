import React from 'react'
import IndividualCard from '../CreatorProfile/IndividualCard'
import FanTransitionTable from './FanTransitionTable'

const FanActivity = () => {
  return (
    <div className="mt-12">
      <h2 className="text-gray-400">Total Sales: </h2>
      <h1 className="text-white text-5xl mt-2">₹40,000.00</h1>
      <div className="grid grid-rows-1 w-full">
         <div className="grid grid-cols-1 gap-x-16 justify-between lg:grid-cols-3">
          <IndividualCard head="Rare" num1="248" num2="400" />
          <IndividualCard head="SuperRare" num1="15" num2="20" />
          <IndividualCard head="EndGame" num1="10" num2="10" />
         </div>
      </div>
      <FanTransitionTable />
    </div>
  )
}

export default FanActivity