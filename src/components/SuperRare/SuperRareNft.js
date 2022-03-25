import React from 'react'
import BackArrow from '../../images/back-arrow.png';
import SuperNFTInfo from './SuperNFTInfo';
import SuperNft from '../../images/bigWhatap.png';

const SuperRareNft = () => {
  return (
    <div className="mt-0 lg:mt-40">
      <div className="mx-8 lg:mx-36" >
        <div className="flex justify-evenly items-center cursor-pointer w-28 h-12 rounded-3xl border-2 border-gray-600">
           <img src={BackArrow} alt="arrow" />
           <h3 className="text-white">Back</h3>
        </div>
        <div className="flex flex-wrap justify-start mt-12">
           <div className="lg:w-1/2 bg-black border-2 border-gray-600 rounded-2xl">
             <img className="rounded-2xl" src={SuperNft} alt="nft" />
           </div>
           <div className="ml-0 lg:ml-20">
             <SuperNFTInfo />
           </div>
        </div>
      </div>
    </div>
  )
}

export default SuperRareNft