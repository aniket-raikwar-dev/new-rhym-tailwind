import React from 'react'

const WalletCard = ({head, num}) => {
  return (
    <div className="w-80 rounded-xl mt-8 items-start justify-evenly mr-8 bg-zinc-800 flex flex-col">
      <div className="h-80 w-full rounded-t-xl bg-black"></div>
      <div className="h-28 w-full">
      <h3 className="ml-4 mt-2 text-3xl font-light text-white">{head}</h3>
      <h2 className="text-3xl ml-4 mt-2 tracking-wide text-white font-bold">{num} <span className="font-light text-lg">In collection</span></h2>
      </div>
    </div>
  )
}

export default WalletCard