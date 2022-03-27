import React from 'react'

const OtpForm = () => {
  return (
    <div className="mx-24 mt-12">
      <h2 className="text-white text-2xl w-2/3">Please enter the one time password to verify your account</h2>
      <p className="text-white mt-4 text-base">A code has been sent to 8459257169</p>
      <div className="flex justify-between mt-8 w-2/3">
      <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
        <input 
          type="tel" 
          className="text-white bg-transparent outline-0 pb-2 w-16 text-center border-b-2 border-b-slate-500 border-b-rounded-2xl text-2xl" 
          placeholder="X"
          name="country-code"
          autoComplete='off'
        />
      </div>
      <div className="flex items-center justify-center cursor-pointer mt-8 text-white text-xl w-24 py-2 rounded-3xl border-2 border-pink-600">Login</div>
    </div>
  )
}

export default OtpForm