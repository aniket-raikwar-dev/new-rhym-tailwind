import React from 'react'
import Lock from '../../images/lock.png';
import Fanclub from '../../images/fanclub.png';

const FanclubCard = ({head}) => {
  return (
    <div className="cursor-pointer bg-zinc-800 rounded-2xl mt-8">
       <div className="bg-fixed h-auto">
         <img className="rounded-t-2xl object-cover" src={Fanclub} alt="fanclub-img" />
       </div>
       <div className="mx-4 h-40">
         <h2 className="text-white mt-4 text-2xl">{head}</h2>
         <p className="text-white mt-2 text-sm font-light">Entry into premium discord</p>
         <p className="text-white text-sm font-light">(Unlock with 1 early bird coin)</p>
         <div className="flex mt-4">
           <div className="w-12 h-12 cursor-pointer rounded-full bg-black flex justify-center items-center">
              <img src={Lock} alt="lock" />
           </div>
           <div className="ml-4 flex items-center justify-center cursor-pointer text-white w-20 h-12 rounded-3xl border-2">View</div>
         </div>
       </div>
    </div>
  )
}

export default FanclubCard