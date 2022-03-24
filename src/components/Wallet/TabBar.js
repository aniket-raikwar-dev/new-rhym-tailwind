import React, {useState} from 'react'
import FanActivity from './FanActivity';
import YourWallet from './YourWallet';

const TabBar = () => {

  const [selected, setSelected] = useState('your');
  const chooseOrange = `inline-block cursor-pointer p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500`;
  const chooseGray = `inline-block cursor-pointer p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`;

  return ( 
  <div>
  <div className="text-sm mt-12 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      <li onClick={() => setSelected('fan')} class="mr-2">
        <p className={selected === 'fan' ? chooseOrange : chooseGray}>Fan Activity</p>
      </li>
      <li onClick={() => setSelected('your')} class="mr-2">
        <p className={selected === 'your' ? chooseOrange : chooseGray} aria-current="page">Your Activity</p>
      </li>
    </ul>
  </div>
      
      <div>
        {selected === 'fan' && <FanActivity /> }
        {selected === 'your' && <YourWallet /> }
      </div>

  </div>

  )
}

export default TabBar