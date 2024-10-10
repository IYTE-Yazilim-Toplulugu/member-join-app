"use client"
import CongratsSocialLinks from '@/app/components/CongratsSocialLinks';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import React, {  useContext, useEffect, useState } from 'react';

import bg_en from "@/image/welcome.svg";
import bg_tr from "@/image/tebrikler.svg";
import Faq from '@/app/components/Faq';
import axios from 'axios';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/navigation';



const Congrats = () => {
  const { lang } = useContext(LanguageContext);
  const [isValid, setIsValid] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const testuser = async () => {
      const token = localStorage.getItem("access");
      try {
        const res = await axios.post("../../api/token", {token : token});
        if (res.status != 200) {
          setIsValid(false);
          router.replace("/");
        }
        else {
          setIsValid(true);
        }
      } catch {
        setIsValid(false);
        router.replace("/");
      }
    }
    testuser();
  }, []);
  return (
    <main>
      <Image src={lang == "tr" ? bg_tr : bg_en} alt="" className="w-full pointer-events-none" />


      <div className={`flex flex-col px-8 text-black -mt-20`}>
      {
          isValid ? (
            <div className='mb-20'>
              <p className='text-sm font-bold my-2'>{ lang == "tr" ? "Whataspp grubumuza katılamadıysan bu link üzerinden girebilirsin." : "If you could not join our Whatsapp group, you can enter via this link."} </p>
              <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank" className="bg-[#25D366] cursor-pointer p-4 rounded-lg flex justify-between items-center shadow-md shadow-black/20 mb-3">
                <div className="flex justify-start items-center text-white gap-2">
                <WhatsAppIcon sx={{ fontSize: "36px"}} />
                  <p className="font-bold">
                    {lang == "tr" ? "Whatsapp Grubuna Katıl" : "Join Our Whatsapp Group"}
                  </p>
                </div>
                <div className="flex justify-end items-center text-white gap-2">
                  <ChevronRightIcon />  
                </div>
              </a>
            </div>
          ) : null
        }
        <CongratsSocialLinks />
        <Faq />
      </div>
    </main>
  )
}

export default Congrats