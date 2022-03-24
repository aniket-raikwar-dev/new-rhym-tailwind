import React from 'react'
import FanclubCard from './FanclubCard';

const SuperRareFanclub = () => {
  return (
    <div className="mt-44 mx-36">
      <h1 className="text-white text-4xl text-center font-normal">SuperRare Fanclub Benefits</h1>
      <div className="grid grid-rows-1 w-full">
         <div className="grid grid-cols-1 gap-x-16 justify-between lg:grid-cols-3">
          <FanclubCard head="Discord" />
          <FanclubCard head="Special Avatar" />
          <FanclubCard head="1:1 Stream" />
          <FanclubCard head="Exclusive Tournaments" />
          <FanclubCard head="Discord" />
          <FanclubCard head="Discord" />
         </div>
      </div>
    </div>
  )
}

export default SuperRareFanclub;