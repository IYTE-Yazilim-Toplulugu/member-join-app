"use client"
import React, { useContext, useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { style } from "@/app/components/modals/modalStyle";
import { ModalContext } from '@/context/ModalContext';
import { CirclesWithBar, Grid } from "react-loader-spinner";
import { useRouter } from 'next/navigation';
import { FeedbackContex } from '@/context/FeedbackContext';

const RedirectLoader = () => {
    const { isRedirectModalopen, setIsRedirectModalOpen } = useContext(ModalContext);
    const { error, setError, userExist, setUserExist, complete, setComplete, counter, setCounter } = useContext(FeedbackContex);

    const router = useRouter();


    useEffect(() => {
        if (counter > 0 && complete) {
          setTimeout(() => setCounter(counter - 1), 1000)
        }
        else if (counter == 0) {
          setTimeout(() => {
            window.open(process.env.NEXT_PUBLIC_WHATSAPP_URL!)
          }, 750);
          setTimeout(() => router.push("/congrats"), 1000);
        }
      }, [counter, complete, router]);

  return (
    <Modal
        open={isRedirectModalopen}
        // onClose={() => }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          complete ?
            (
              <Box sx={style}>
                <div className="flex flex-col justify-center items-center px-4">
                  <CirclesWithBar
                    height="90"
                    width="90"
                    color="#4dc247"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                  />
                  <p className="text-[64px] font-bold text-center mt-4">{counter}</p>
                  <p className="mt-4 text-lg font-bold mb-2 text-center">WhatsApp Grubuna Yönlendiriliyorsunuz</p>
                  <p className="text-sm max-w-[300px] text-center">Topluluk Etkinlikleri ve Duyuruları WhatsApp Gruplarından Yapılacaktır.</p>
                </div>
              </Box>
            ) :
            userExist ?
              (
                <Box sx={style}>
                  <div className="flex flex-col justify-center items-center px-4">
                    <p className="mt-4 text-lg font-bold mb-2 text-center">Üye Kaydınız Bulunmaktadır</p>
                    <p className="text-sm max-w-[350px] text-center">Topluluk etkinlikleri ve duyurukarı WhatsApp gruplarımızdan yapılmaktadır. WhatsApp grubunda değilseniz aşağıdaki butona basarak gruba girebilirsiniz. Sertifikanızı almak isterseniz Sertifika Sayfasına Git butonuna basarak ulaşabilirsiniz.</p>
                    <p className="text-xs max-w-[350px] text-center mt-2">NOT: WhatsApp grubuna girdikten sonra otomatik olarak Sertifika sayfasına yönlendirileceksiniz.</p>
                    <div className="flex flex-col gap-3 w-full items-center mt-4">
                      <button onClick={() => {
                        setComplete(true);
                      }} className="py-2 w-full max-w-xs bg-green-600 rounded-lg text-white">WhatsApp Grubuna Gir</button>
                      <button onClick={() => {
                        router.push("/tebrikler")
                      }} className="py-2 w-full max-w-xs bg-yellow-500 rounded-lg text-white">Sertifika Sayfasına Git</button>
                      <button onClick={() => {
                        setIsRedirectModalOpen(false);
                        setUserExist(false);
                      }} className="py-2 w-full max-w-xs rounded-lg">Geri Dön</button>
                    </div>
                  </div>
                </Box>
              ) :
              error ?
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <p className="text-[64px] font-bold text-center mt-4">HATA</p>
                      <p className="text-sm max-w-[300px] text-center">Sistem şu anda çalışmamakta ya da anlık bir hata oluşmaktadır. Tekrar deneyiniz, eğer sorunla tekrar karşılaşırsanız lütfen yöneticileri bilgilendiriniz.</p>
                      <div className="mt-5 flex flex-col items-center">
                        <p>yazilim@iyte.edu.tr</p>
                        <a className="underline text-blue-700 mt-2" href="https://card.iyteyazilim.com/" target="_blank" rel="noopener noreferrer">Yöneticiler</a>
                      </div>

                      <button onClick={() => {
                        setIsRedirectModalOpen(false);
                        setError(false);
                      }} className="py-2 w-full max-w-xs rounded-lg mt-4">Geri Dön</button>
                    </div>
                  </Box>
                ) :
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <Grid
                        height="90"
                        width="90"
                        color="#FEA236"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='circles-with-bar-loading'
                      />
                      <p className="mt-6">Kayıt Olma İşlemi Sürüyor</p>
                    </div>
                  </Box>
                )
        }
      </Modal>
  )
}

export default RedirectLoader