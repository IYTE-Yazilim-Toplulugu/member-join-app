"use client"
import Image from "next/image";
import KvkkModal from "../components/modals/KvkkModal";
import RedirectLoader from "../components/modals/RedirectLoader";
import Rules from "../components/modals/Rules";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

import bgTr from "@/image/top.svg";
import bgEn from "@/image/topEng.svg";
import Form from "../components/Form";
import SocialLinks from "../components/SocialLinks";
import Faq from "../components/Faq";
import LanguageBtn from "../components/LanguageBtn";


export default function Home() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full">
      {/* Modals */}
      <KvkkModal />
      <Rules />
      <RedirectLoader />

      <div className="relative w-full h-full">
        <LanguageBtn />
      </div>
      <Image src={lang == "tr" ? bgTr : bgEn} alt="" className="w-full pointer-events-none" />
      

      <div className="flex flex-col px-8 text-black">
        <Form />
        <SocialLinks />
        <Faq />
        <p className="my-6 text-black/60 text-center text-sm">Copyright 2023 © Yazılım Topluluğu</p>
      </div>
      
    </div>
  );
}
