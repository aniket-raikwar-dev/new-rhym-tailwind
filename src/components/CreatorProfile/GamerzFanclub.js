import React, { useState } from 'react';
import Discord from '../../images/discord.png';
import FanClubImg from '../../images/fanclub-circle.png';

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
    <div className="mx-36 mt-32">
       <h3 className="text-white text-center text-5xl font-light">Gamerz Exclusive Fanclub</h3>
       <p className="text-gray-500 text-xl mt-4 text-center">(Shown in order of time fan joined the club)</p>
       <div className="mt-12 w-full flex flex-col items-center bg-zinc-800 rounded-2xl">
           <div className="w-40 h-12 flex justify-evenly items-center cursor-pointer my-8 rounded-3xl border-2 border-pink-600">
             <img src={Discord} alt="discord" />
             <p className="text-white">Join Discord</p>
           </div>
           <div className="h-56 w-4/5 flex mt-8 justify-around">
           {array.slice(0, 4).map((arr => (
            <div key={array} className="w-44 h-44 mt-4 -mb-2 rounded-full border-2 border-pink-600 bg-gray-500">
              <img src={FanClubImg} alt="fanClubImg" />
            </div>
          )))}
           </div>

          {seeMore ? 
              <div className=" w-4/5 -mt-4 flex flex-wrap justify-evenly">
              {array.slice(0, 5).map((arr => (
               <div key={array} className="w-36 h-36 mt-4 rounded-full border-2 border-pink-600 bg-gray-500">
                 <img src={FanClubImg} alt="fanClubImg" />
               </div>
             )))}
              </div>
              :
              <div className=" w-4/5 -mt-4 flex flex-wrap justify-evenly">
              {array.slice(5, array.length).map((arr => (
                <div key={array} className="w-36 h-36 mt-12 rounded-full border-2 border-pink-600 bg-gray-500">
                  <img src={FanClubImg} alt="fanClubImg" />
                </div>
              )))}
              </div>  
          }
           <div onClick={() => showMore()} className="w-40 h-12 mb-16 mt-12 flex justify-evenly items-center cursor-pointer rounded-3xl border-2 text-white">{seeMore ? "see more" : "see less"}</div>
       </div>
    </div>






    // <div className="mt-20 text-center">
    //   <h3 className="text-5xl font-light tracking-wide text-white">Gamerz Exclusive Fanclub</h3>
    //   <p className="text-white mt-4">(Shown in order of time fan joined the club)</p>
    //   <div className="bg-zinc-800 mx-36 mt-16 rounded-xl h-96">

    //     {/* <div className="flex justify-center">
    //       <div className="flex flex-wrap justify-around w-4/5">
    //       {array.slice(0, 4).map((arr => (
    //         <div key={array} className="w-44 h-44 mt-4 rounded-full border-4 border-yellow-400 bg-gray-500">
              
    //         </div>
    //       )))}
    //       </div>
    //     </div> */}

    //   </div>
    // </div>
  )
}

export default GamerzFanclub