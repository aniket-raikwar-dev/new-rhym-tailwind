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
    <div className="gird-rows-1">
      <div className="sm:grid-cols-4 sm:w-full grid-cols-12">
      <div 
        className="h-32 lg:h-64 flex justify-center bg-cover bg-center bg-zinc-900">
        <img className="bg-cover" src={CreatorBackImg} alt="profile-back" />
      </div>
      <div className="flex items-center justify-between flex-wrap -mt-20 mx-8 lg:mx-36">
        <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-xl mt-8 lg:-mt-12 bg-gray-300">
          <img className="rounded-xl" src={ProfileImg} alt="profile-pic" />
        </div>
        <div className="hidden lg:flex">
        <div className="flex w-60 h-12 mt-8 rounded-xl items-center justify-evenly bg-zinc-700">
           <img className="cursor-pointer" src={Youtube} alt="youtube" />
           <img className="cursor-pointer" src={Instagram} alt="youtube" />
           <img className="cursor-pointer" src={FaceBook} alt="youtube" />
           <img className="cursor-pointer" src={Twitter} alt="youtube" />
        </div>
        </div>
      </div>
      <div className="mx-8 lg:mx-36 my-8">
        <h1 className="text-3xl lg:text-5xl text-white">Ujjwal Chaurasia</h1>
        <p className="text-white text-base mt-12">I am releasing my own fan coin - $GAMERZ coins. Releasing first 200/500 tokens available @ early bird price - <span className="text-orange-500">See all the benefits</span></p>
        <div className="flex lg:hidden">
        <div className="flex w-full h-16 mt-8 rounded-2xl items-center justify-evenly bg-zinc-700">
           <img className="cursor-pointer" src={Youtube} alt="youtube" />
           <img className="cursor-pointer" src={Instagram} alt="youtube" />
           <img className="cursor-pointer" src={FaceBook} alt="youtube" />
           <img className="cursor-pointer" src={Twitter} alt="youtube" />
        </div>
        </div>
        <div className="w-full h-16 flex items-center justify-evenly cursor-pointer mt-8 lg:w-80 lg:h-[3rem] bg-black rounded-xl border-2 border-purple-700">
           <img className="ml-2" src={HandCoin} alt="hand-coin" />
           <h3 className="text-white text-lg -ml-2">Only 500 Tokens available</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileSection;