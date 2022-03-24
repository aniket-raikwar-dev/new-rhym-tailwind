import React from 'react'
import GamerzFanclub from './GamerzFanclub'
import GamerzNFT from './GamerzNFT'
import ProfileSection from './ProfileSection'

const CreatorProfile = () => {
  return (
    <div>
      <ProfileSection />
      <GamerzNFT />
      <GamerzFanclub />
    </div>
  )
}

export default CreatorProfile