/* eslint-disable react/style-prop-object */
import React from 'react';
import CreatorBackImg from '../../images/creator-hero-back.png';
import ProfileImg from '../../images/creator-profile.png'; 
import Youtube from '../../images/youtube-social.png';
import FaceBook from '../../images/facebook-social.png';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
import HandCoin from '../../images/hand-coin.png';


const ProfileSection = () => {
  return (
    <div>
      <div 
        className="h-64 flex justify-center bg-cover bg-center bg-zinc-900">
        <img className="bg-cover" src={CreatorBackImg} alt="profile-back" />
      </div>
      <div className="flex items-center justify-between flex-wrap -mt-20 mx-36">
        <div className="w-44 h-44 rounded-xl -mt-12 bg-gray-300">
          <img className="rounded-xl" src={ProfileImg} alt="profile-pic" />
        </div>
        <div className="w-60 h-12 mt-8 rounded-xl flex items-center justify-evenly bg-gray-700">
           <img className="cursor-pointer" src={Youtube} alt="youtube" />
           <img className="cursor-pointer" src={Instagram} alt="youtube" />
           <img className="cursor-pointer" src={FaceBook} alt="youtube" />
           <img className="cursor-pointer" src={Twitter} alt="youtube" />
        </div>
      </div>
      <div className="mx-36 my-8">
        <h1 className="text-5xl text-white">Ujjwal Chaurasia</h1>
        <p className="text-white text-base mt-8">I am releasing my own fan coin - $GAMERZ coins. Releasing first 200/500 tokens available @ early bird price - <span className="text-orange-700">See all the benefits</span></p>
        <div className="flex items-center justify-evenly cursor-pointer mt-4 w-80 h-16 bg-black rounded-xl border-2 border-purple-700">
           <img className="ml-2" src={HandCoin} alt="hand-coin" />
           <h3 className="text-white text-lg -ml-2">Only 500 Tokens available</h3>
        </div>
      </div>
    </div>










    // <div className="h-3/4 flex flex-col ">
    //   <div className="h-72 bg-blue-900"></div>
    //   <div className="h-40 w-40 rounded-full -mt-32 ml-28 bg-red-300"></div>
    //   <div className="flex border-b-red-700">
    //       <div className="flex flex-col">
    //         <h1 className="ml-28  text-4xl mt-4 text-white">Ujjwal Chaurasia</h1>
    //         <p className="ml-28 text-lg mt-2 text-orange-200">@ujjwalgamer</p>
    //         <p className="ml-28 text-base mt-2 text-white">I am releasing my own fan coin - #GAMERZ coins. Now my true fans can buy these tokens & be a part of my exclusive fanclub with all the premium benefits, more than that now If I succeed my coin value also goes up, so all my coins holders have a chance to earn from it & be prat of my success.</p>
    //         <p className="ml-28 text-base text-white mb-20">Releasing first 200/500 tokens available @ early bird price - <span className="text-red-400">See all the benefits</span></p>
    //       </div>
    //       <div className=" flex w-3/4">
    //         <div className="w-8 h-8 ml-8 cursor-pointer bg-white"></div>
    //         <div className="w-8 h-8 ml-8 cursor-pointer bg-white"></div>
    //         <div className="w-8 h-8 ml-8 cursor-pointer bg-white"></div>
    //         <div className="w-8 h-8 ml-8 cursor-pointer bg-white"></div>
    //       </div>
    //   </div>
    // </div>
  )
}

export default ProfileSection