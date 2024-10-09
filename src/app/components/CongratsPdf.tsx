"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GeneratePdf from '../functions/certificateGenerator';
import Cookies from 'js-cookie';
import jwt from "jsonwebtoken";

const CongratsPdf = ({ showIframe, setShowIframe } : { showIframe : boolean; setShowIframe: Dispatch<SetStateAction<boolean>> }) => {
    const iframeRef = useRef(null);
  return (
    <div>
        <iframe ref={iframeRef} title="PDF Viewer" className={`mx-auto ${showIframe ? "-mt-20" : null}`} height={showIframe ? "300px" : "0px"} width="90%" />

        {
          showIframe ? (
            <div className="flex justify-center mt-3">
              <button type="button" onClick={() => console.log("a")} className="py-2 font-bold px-12 bg-orange-400 rounded-lg"><DownloadIcon /> Sertifikanı İndir</button>
            </div>
          ) : null
        }

        {
          showIframe ? (
            <div className="flex flex-col px-8 text-black mt-8">
              <a href="https://chat.whatsapp.com/GGXEVUKPtyqKgq5y7DzgsE" target="_blank" className="wp cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20  mb-3">
                <div className="flex justify-start items-center text-white gap-2">
                  <WhatsAppIcon sx={{ fontSize: "36px"}} />
                  <p className="font-bold text-center">Join our WhatsApp Group</p>
                </div>
                <div className="flex justify-end items-center text-white gap-2">
                  {/* <p className="text-xs">@iyte_yazilim</p> */}
                  <ChevronRightIcon />
                </div>
              </a>
              <p className="mx-auto text-center text-xs px-10 mt-2 font-light ">NOTE: The redirection to WhatsApp may be blocked because your pop-up feature is turned off. All our announcements and teams are in our WhatsApp group. Be sure to enter the WhatsApp group.</p>
            </div>
          ) : null
        }
    </div>
  )
}

export default CongratsPdf