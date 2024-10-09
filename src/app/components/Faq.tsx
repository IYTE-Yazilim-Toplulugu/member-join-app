import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const Faq = () => {
    const {lang} = useContext(LanguageContext);
  return (
    <div className='w-full'>
        <h2 className="font-bold text-lg mt-5">
            {lang == "tr" ? "Bir sorunla mı karşılaştınız?" : "Encountered a problem?"}
        </h2>

        <div className="mt-3 mb-10 relative z-0">
        <Accordion sx={{ position: "relative", zIndex: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {lang == "tr" ? "Bilgilerimi Yanlış Girdim" : "I entered my information incorrectly"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Lütfen yöneticilerimizle aşağıdaki linkten iletişime geçiniz." : "Please contact our administrators using the link below."}
                <br />
                <a className="font-bold" href="https://card.iyteazilim.online/">card.iyteazilim.online</a>
              </Typography>

            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "WhatsApp Grubuna Giremedim" : "I Could not Join  the WhatsApp Group"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Pop-upları engellemediğinizden emin olduktan sonra bilgilerinizle tekrar üye olmayı deneyiniz. Otomatik olarak sistem WhatsApp grubuna atacaktır. Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz." : "Please make sure you are not blocking pop-ups then try registering again with your information again. The system will automatically add you to the WhatsApp group. If the problem persists, please contact the administrators."}
                <br />
                <a className="font-bold" href="https://card.iyteazilim.online/">card.iyteazilim.online</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "Genel Kurul Sertifikamı Alamadım" : "I could not Receive My General Assembly Certificate"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Bilgilerinizle tekrar üye olmayı deneyiniz. Karşınıza sertifika alma ekranı gelecektir. Girdiğiniz zaman sertifikanız otomatik olarak indirilecektir. Sorunun devamı halinde yöneticilerimizle aşağıdaki linkten iletişime geçiniz." : "Try to sign up again with your information. You will see the certificate download screen. Once you enter, your certificate will be downloaded automatically. If the problem persists, please contact our administrators via the link below."}
                <br />
                <a className="font-bold" href="https://card.iyteazilim.online/">card.iyteazilim.online</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "Sertifikamı Linkedine Yükleyemedim" : "I Could not Upload My Certificate to Linkedin"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Belgeyi indirerek yüklemeyi deneyiniz. Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz." : "Try downloading the document and uploading it again. If the issue persists, please contact the administrators."}
                <br />
                <a className="font-bold" href="https://card.iyteazilim.online/">card.iyteazilim.online</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "Okul Numaramı Bilmiyorum" : "I Do not Know My School Number"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Okul numarası İYTE Öğrenci kartınız üzerinde yazmaktadır. 9 Haneli öğrenci numaranızın bulunmaması halinde Öğrenci İşlerine başvurunuz." : "Your student number is written on your IYTE Student Card. If you do not have a 9-digit student number, please contact the Student Affairs Office."}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "İYTE Öğrencisi Değilim Nasıl Üye Olabilirim?" : "I am not an IYTE student, how can I become a member?"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır. İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz." : "Our Non-Institute Registration System is under construction. Follow our Instagram account to be sure to be informed when system is activated."}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "Çift Ana Dal / Yan Dal Yapıyorum Bölüme Ne Yazacağım?" : "I am doing a double major / minor. What should I write in the department?"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Lütfen merkezi yerleştirme ile girdiğiniz bölümü yazınız." : "Please write the department you entered through student placement."}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {lang == "tr" ? "Üniversite Öğrencisi Değilim, Üye Olabiliyor Muyum?" : "I am not a university student, can I become a member?"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang == "tr" ? "Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır. İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz." : "Our Non-Institute Registration System is under construction. Follow our Instagram account to be sure to be informed when system is activated."}
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
    </div>
  )
}

export default Faq