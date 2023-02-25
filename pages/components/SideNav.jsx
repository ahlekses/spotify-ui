import React from 'react'
import Image from "next/image"
import SpotifyWhiteLogo from "../../images/logos/Spotify_Logo_RGB_White.png"
import SidebarNav from './SidebarNav'
import PlaylistsSidebar from './PlaylistsSidebar'

function SideNav() {
  return (
    <div className='bg-[#010001] z-50 w-[17%] h-full flex flex-col items-center' >
        <div className="h-24 w-full  flex items-center pl-6">
            <Image src={SpotifyWhiteLogo} alt="Spotify White Logo" priority={true} height={40} />
        </div>
        <SidebarNav />
        <PlaylistsSidebar />
    </div>
  )
}

export default SideNav