import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageIcon from '@mui/icons-material/Language';

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <a href="https://www.instagram.com/iyte_yazilim/" target="_blank" className="insta cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mt-24 mb-3 w-full">
          <div className="flex justify-start items-center text-white gap-2">
            <InstagramIcon sx={{ fontSize: "36px" }} />
            <p className="font-bold">Instagram</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">@iyte_yazilim</p>
            <ChevronRightIcon />
          </div>
        </a>

        <a href="https://iyteyazilim.online/" target="_blank" className="website cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-10 w-full">
          <div className="flex justify-start items-center text-white gap-2">
            <LanguageIcon sx={{ fontSize: "36px" }} />
            <p className="font-bold">Website</p>
          </div>
          <div className="flex justify-end items-center text-white gap-2">
            <p className="text-xs">iyteyazilim.online</p>
            <ChevronRightIcon />
          </div>
        </a>
    </div>
  )
}

export default SocialLinks