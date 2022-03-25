import React from 'react';
import IndividualCard from './IndividualCard';

const GamerzNFT = () => {
  return (
    <div className="mx-8 lg:mx-36 mt-32 flex flex-col items-center">
      <div>
        <h3 className="text-3xl lg:text-4xl text-white font-light tracking-wide">Gamerz Exclusive NFTs</h3>
      </div>
      <div className="grid grid-rows-1 w-full">
         <div className="grid grid-cols-1 gap-x-16 justify-between lg:grid-cols-3">
          <IndividualCard head="Rare" num1="248" num2="400" />
          <IndividualCard head="SuperRare" num1="15" num2="20" />
          <IndividualCard head="EndGame" num1="10" num2="10" />
         </div>
      </div>

    </div>
  )
}

export default GamerzNFT