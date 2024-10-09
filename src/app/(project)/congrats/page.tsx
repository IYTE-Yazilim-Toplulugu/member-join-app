"use client"
import CongratsSocialLinks from '@/app/components/CongratsSocialLinks';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import React, {  useContext, useState } from 'react';

import bg_en from "@/image/welcome.svg";
import bg_tr from "@/image/tebrikler.svg";
import Faq from '@/app/components/Faq';

const Congrats = () => {
  const { lang } = useContext(LanguageContext);
  const [showIframe, setShowIframe] = useState(false);
  return (
    <main>
      <Image src={lang == "tr" ? bg_tr : bg_en} alt="" className="w-full pointer-events-none" />


      <div className={`flex flex-col px-8 text-black ${showIframe ? "mt-12" : "-mt-20"}`}>
        <CongratsSocialLinks />
        <Faq />
      </div>
    </main>
  )
}

export default Congrats