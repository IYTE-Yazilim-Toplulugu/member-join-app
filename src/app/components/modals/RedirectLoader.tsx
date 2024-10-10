"use client"
import React, { useContext, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { style } from "@/app/components/modals/modalStyle";
import { ModalContext } from '@/context/ModalContext';
import { CirclesWithBar, Grid } from "react-loader-spinner";
import { useRouter } from 'next/navigation';
import { FeedbackContex } from '@/context/FeedbackContext';
import { LanguageContext } from '@/context/LanguageContext';

const RedirectLoader = () => {
    const { isRedirectModalopen, setIsRedirectModalOpen } = useContext(ModalContext);
    const { error, setError, userExist, setUserExist, complete, setComplete, counter, setCounter, rateLimit, setRateLimit } = useContext(FeedbackContex);

    const { lang } = useContext(LanguageContext);
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
                    <p className="mt-4 text-lg font-bold mb-2 text-center">
                      {lang == "tr" ? "Üye Kaydınız Bulunmaktadır" : "You are registered as a member"}
                    </p>
                    <p className="text-sm max-w-[350px] text-center">
                      {lang == "tr" ? "Topluluk etkinlikleri ve duyurukarı WhatsApp gruplarımızdan yapılmaktadır. WhatsApp grubunda değilseniz aşağıdaki butona basarak gruba girebilirsiniz. Sertifikanızı almak isterseniz Sertifika Sayfasına Git butonuna basarak ulaşabilirsiniz." : "Community events and announcements are made through our WhatsApp groups. If you are not in the WhatsApp group, you can join the group by pressing the button below. If you want to get your certificate, you can reach it by pressing the Go to Certificate Page button."}
                    </p>
                    <div className="flex flex-col gap-3 w-full items-center mt-4">
                      <button onClick={() => {
                        setComplete(true);
                      }} className="py-2 w-full max-w-xs bg-green-600 rounded-lg text-white">
                        {lang == "tr" ? "WhatsApp Grubuna Gir" : "Join WhatsApp Group"}
                      </button>
                      <button onClick={() => {
                        setIsRedirectModalOpen(false);
                        setUserExist(false);
                      }} className="py-2 w-full max-w-xs rounded-lg">
                        {lang == "tr" ? "Geri Dön" : "Go Back"}
                      </button>
                    </div>
                  </div>
                </Box>
              ) :
              error ?
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <p className="text-[64px] font-bold text-center mt-4">
                        {lang == "tr" ? "HATA" : "ERROR"}
                      </p>
                      <p className="text-sm max-w-[300px] text-center">
                        {lang == "tr" ? "Sistem şu anda çalışmamakta ya da anlık bir hata oluşmaktadır. Tekrar deneyiniz, eğer sorunla tekrar karşılaşırsanız lütfen yöneticileri bilgilendiriniz." : "The system is currently not working or a momentary error is occurring. Try again, if you encounter the problem again please inform the administrators."}
                      </p>
                      <div className="mt-5 flex flex-col items-center">
                        <p>yazilim@iyte.edu.tr</p>
                        <a className="underline text-blue-700 mt-2" href="https://card.iyteyazilim.online/" target="_blank" rel="noopener noreferrer">
                          {lang == "tr" ? "Yöneticiler" : "Manager"}
                        </a>
                      </div>

                      <button onClick={() => {
                        setIsRedirectModalOpen(false);
                        setError(false);
                      }} className="py-2 w-full max-w-xs rounded-lg mt-4">
                        {lang == "tr" ? "Geri Dön" : "Go Back"}
                      </button>
                    </div>
                  </Box>
                ) :
                rateLimit ?
                (
                  <Box sx={style}>
                    <div className="flex flex-col justify-center items-center px-4">
                      <p className="text-[64px] font-bold text-center mt-4">
                        {lang == "tr" ? "Limiti Aştın!" : "You Exceeded The Limit"}
                      </p>
                      <p className="text-sm max-w-[300px] text-center">
                        {lang == "tr" ? "Dakikalık işlem limitini aştın!" : "You have exceeded your transaction limit per minute!"}
                      </p>
                      <div className="mt-5 flex flex-col items-center">
                        <p>yazilim@iyte.edu.tr</p>
                        <a className="underline text-blue-700 mt-2" href="https://card.iyteyazilim.online/" target="_blank" rel="noopener noreferrer">
                        {lang == "tr" ? "Yöneticiler" : "Managers"}
                        </a>
                      </div>

                      <button onClick={() => {
                        setIsRedirectModalOpen(false);
                        setRateLimit(false);
                      }} className="py-2 w-full max-w-xs rounded-lg mt-4">
                        {lang == "tr" ? "Geri Dön" : "Go Back"}
                      </button>
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
                      <p className="mt-6">
                        {lang == "tr" ? "Kayıt Olma İşlemi Sürüyor" : "Registration Process is in Progress"}
                      </p>
                    </div>
                  </Box>
                )
        }
      </Modal>
  )
}

export default RedirectLoader