import Image from 'next/image';
import React from 'react';

import DiscordIcon from "@/image/discord.svg";


import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useRouter } from 'next/navigation';

const CongratsSocialLinks = () => {
  return (
    <div>
        <a href="https://discord.gg/657xSPQp5C/" target="_blank" className="discord cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
          <Image src={DiscordIcon} className='w-8 pointer-events-none' alt="image" />
            <p className="font-bold">Discord</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">İYTE Yazılım Topluluğu</p>
            <ChevronRightIcon />
          </div>
        </a>
        
        <a href="https://www.instagram.com/iyte_yazilim/" target="_blank" className="insta cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20  mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <InstagramIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">Instagram</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">@iyte_yazilim</p>
            <ChevronRightIcon />
          </div>
        </a>

        <a href="https://www.linkedin.com/company/iyteyazilim/" target="_blank" className="linkedin cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-3">
          <div className="flex justify-start items-center text-white gap-2">
            <LinkedInIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">LinkedIn</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">iyteyazilim</p>
            <ChevronRightIcon />
          </div>
        </a>

        <a href="https://iyteyazilim.com/" target="_blank" className="website cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-10">
          <div className="flex justify-start items-center text-white gap-2">
            <LanguageIcon sx={{ fontSize: "36px"}} />
            <p className="font-bold">Website</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">iyteyazilim.com</p>
            <ChevronRightIcon />
          </div>
        </a>
    </div>
  )
}

export default CongratsSocialLinks