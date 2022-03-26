import React, { useState } from 'react';
import Discord from '../../images/discord.png';
import FanClubImg from '../../images/fanclub-circle.png';
import EmptyFanclub from './EmptyFanclub';

const GamerzFanclub = () => {
  const item = [];
  for(let i=0; i<50; i++) {
     item.push(i);
  }
  const [array, setArray] = useState(item);
  const [seeMore, setSeeMore] = useState(true);

  const showMore = () => {
    setSeeMore(!seeMore);
  }

  return (
    <div className="mx-8 lg:mx-36 mt-32">
       <h3 className="text-white text-center text-4xl lg:text-5xl font-light">Gamerz Exclusive Fanclub</h3>
       <p className="text-gray-500 text-lg lg:text-xl mt-4 text-center">(Shown in order of time fan joined the club)</p>

       <div className="mt-12 w-full flex flex-col items-center bg-zinc-800 rounded-2xl">
           <div className="w-40 h-12 flex justify-evenly items-center cursor-pointer my-8 rounded-3xl border-2 border-pink-600">
             <img src={Discord} alt="discord" />
             <p className="text-white">Join Discord</p>
           </div>
           <div className=" h-24 w-full lg:h-56 lg:w-4/5 flex lg:mt-8 justify-around">
           {array.slice(0, 4).map((arr => (
            <div key={array} className="w-16 h-16 lg:w-44 lg:h-44 mt-2 lg:mt-4 mb-2 lg:-mb-2 rounded-full border-2 border-pink-600 bg-gray-500">
              <img src={FanClubImg} alt="fanClubImg" />
            </div>
          )))}
           </div>

           <div className="mb-12 w-4/5 lg:w-3/5 mt-2 lg:-mt-4 flex flex-wrap lg:justify-between justify-around">
              {array.slice(0, 4).map((arr => (
               <div key={array} className="w-12 h-12 lg:w-36 lg:h-36 lg:mt-4 rounded-full border-2 border-pink-600 bg-gray-500">
                 <img src={FanClubImg} alt="fanClubImg" />
               </div>
             )))}
            </div>

          {seeMore ? 
              <div className="w-full -mt-4 lg:w-4/5 lg:-mt-4 flex flex-wrap justify-evenly sm:justify-around">
              {array.slice(0, 6).map((arr => (
               <div key={array} className="opacity-30 w-12 h-12 lg:w-28 lg:h-28 lg:mt-4 rounded-full border-2 border-pink-600 bg-gray-500">
                 <img src={FanClubImg} alt="fanClubImg" />
               </div>
             )))}
              </div>
              :
              <div className="w-full -mt-12 lg:w-4/5 flex flex-wrap justify-around lg:justify-evenly">
              {array.slice(5, array.length).map((arr => (
                <div key={array} className="w-12 h-12 mt-8 lg:w-28 ml-2 mr-2 lg:ml-4 lg:mr-4 lg:h-28 lg:mt-12 rounded-full border-2 border-pink-600 bg-gray-500">
                  <img src={FanClubImg} alt="fanClubImg" />
                </div>
              )))}
              </div>  
          }
           <div onClick={() => showMore()} className="w-40 h-12 mb-16 mt-12 flex justify-evenly items-center cursor-pointer rounded-3xl border-2 text-white">{seeMore ? "Show More" : "Show Less"}</div>
       </div>
       <div className="h-20"></div>
       <EmptyFanclub />
    </div>
  )
}

export default GamerzFanclub