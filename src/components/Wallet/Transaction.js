import React from 'react'
import TransactionTable from './TransactionTable'

const Transaction = () => {
  return (
    <div className=" mt-20">
      <h3 className="text-2xl text-white">Transaction History</h3> 
      <TransactionTable />
      <div className="mt-8 flex items-center justify-center w-28 h-8 rounded-2xl border-2 border-white text-white cursor-pointer">Load more</div>
    </div>
  )
}

export default Transaction