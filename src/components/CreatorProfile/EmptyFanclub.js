import React from 'react'
import Discord from '../../images/discord.png';
import EmptyFanClub from '../../images/empty-fanclub.png';

const EmptyFanclub = () => {
  return (
    <div className="mt-12 mb-12 w-full flex flex-col items-center bg-zinc-800 rounded-2xl">
      <div className="w-40 h-12 flex justify-evenly items-center cursor-pointer my-12 rounded-3xl border-2 border-pink-600">
         <img src={Discord} alt="discord" />
         <p className="text-white">Join Discord</p>
       </div>
       <img className="mt-8 mb-8" src={EmptyFanClub} alt="fanclub" />
       <p className="text-white text-lg lg:text-2xl mt-4 mb-24">Be the first one to join the club!</p>
    </div>
  )
}

export default EmptyFanclub