import React from 'react'
import MobileForm from './MobileForm';
import LoginCover from '../../images/loginCover.png';
import OtpForm from './OtpForm';
import OtpDelay from './OtpDelay';

const LoginContent = () => {
  return (
    <div>
      <div className="flex h-screen">
         <div className="w-7/12">
           <MobileForm />
           <OtpDelay />
           <OtpForm />
         </div>
         <div className="w-5/12">
           <img className="h-screen w-full object-cover" src={LoginCover} alt="Login Cover" />
         </div>
      </div>
    </div>
  )
}

export default LoginContent;