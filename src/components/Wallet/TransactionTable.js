import React from 'react';
import User from '../../images/tableUser.png';

const TransactionTable = () => {
  return (
    <div>
    <table className="mt-8 shadow-lg">
      <thead>
      <tr className="border-b border-gray-600">
        <th className="text-gray-400 text-xs px-0 py-2 lg:px-2 lg:py-4 lg:text-bs font-normal text-left">Name</th>
        <th className="text-gray-400 text-xs px-4 py-2 lg:px-72 lg:py-4 text-bs font-normal text-left">Transaction</th>
        <th className="text-gray-400 text-xs px-0 py-2 lg:px-20 lg:py-4 text-bs font-normal text-left">Date & Time</th>
      </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-600">
          <td className="text-white px-0 py-2 lg:px-2 lg:py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-2 lg:mr-4 bg-white">
                <img src={User} alt="user" />
              </div>
              <p className="text-xs lg:text-base">$GAMERZ</p>
            </div>
          </td>
          <td className="text-white px-4 py-2 lg:px-72 lg:py-4 text-xs lg:text-base">Bought 2 Rare Coins</td>
          <td className="text-white px-0 py-2 lg:px-20 lg:py-4 text-xs lg:text-base">19 Mar, 2022, 2:34 PM</td>
        </tr>
        <tr className="border-b border-gray-600">
          <td className="text-white px-0 py-2 lg:px-2 lg:py-4">
          <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-2 lg:mr-4 bg-white">
                <img src={User} alt="user" />
              </div>
              <p className="text-xs lg:text-base">$GAMERZ</p>
            </div>
          </td>
          <td className="text-white px-4 py-2 lg:px-72 lg:py-4 text-xs lg:text-base">Bought 2 Rare Coins</td>
          <td className="text-white px-0 py-2 lg:px-20 lg:py-4 text-xs lg:text-base">19 Mar, 2022, 2:34 PM</td>
        </tr>
        <tr className="border-b border-gray-600">
          <td className="text-white px-0 py-2 lg:px-2 lg:py-4">
          <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-2 lg:mr-4 bg-white">
                <img src={User} alt="user" /> 
              </div>
              <p className="text-xs lg:text-base">$GAMERZ</p>
            </div>
          </td>
          <td className="text-white text-xs px-4 py-2 lg:px-72 lg:py-4 lg:text-base">Bought 2 Rare Coins</td>
          <td className="text-white text-xs px-0 py-2 lg:px-20 lg:py-4 lg:text-base">19 Mar, 2022, 2:34 PM</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default TransactionTable