import React, { useState } from 'react'

const GamerzFanclub = () => {
  const item = [];
  for(let i=0; i<50; i++) {
     item.push(i);
  }
  const [array, setArray] = useState(item);

  return (
    <div className="mt-12 text-center">
      <h3 className="text-5xl font-light tracking-wide text-white">Gamerz Exclusive Fanclub</h3>
      <div className="bg-zinc-800 mx-36 mt-16 flex justify-center rounded-xl h-96">
         <div className="flex flex-wrap justify-around w-4/5">
         {array.slice(0, 4).map((arr => (
          <div key={array} className="w-44 h-44 mt-4 rounded-full border-4 border-yellow-400 bg-gray-500">
             
          </div>
        )))}
         </div>
      </div>









      {/* <h3 className="text-4xl font-light tracking-wide text-white">Gamerz Exclusive Fanclub</h3>
    
        <div className="mt-8 flex flex-wrap w-2/4 justify-around">
        {array.slice(0, 16).map((arr => (
          <div key={array} className="w-40 h-40 mt-4 rounded-full bg-gray-500">
             
          </div>
        )))}
      </div> */}
    </div>
  )
}

export default GamerzFanclub