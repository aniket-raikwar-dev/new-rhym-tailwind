import React from 'react'

const MobileForm = () => {
  return (
    <div className="mx-24 mt-32">
      <h1 className="text-6xl text-white font-sans">Log in</h1>
      <h3 className="text-2xl text-white mt-12 font-sans">Phone Number</h3>
      <div className="flex mt-4">
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-24 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          value="+91"
          name="country-code"
          autoComplete='off'
        />

        <input 
          type="tel" 
          className="ml-8 after:text-white bg-transparent outline-0 pb-2 w-96 text-left border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder='Type Here'
          name="mobile_number"
          autoComplete='off'
        />

        <div className="flex items-center justify-center cursor-pointer ml-4 text-white text-xl w-24 py-2 rounded-3xl border-2 border-pink-600">Get Otp</div>
        
      </div>
    </div>
  )
}

export default MobileForm