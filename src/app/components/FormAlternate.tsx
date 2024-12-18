import { ModalContext } from '@/context/ModalContext';
import React, { FormEvent, useContext } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePassword } from '../functions/passwordGenerator';
import axios from 'axios';
import { FeedbackContex } from '@/context/FeedbackContext';
import { LanguageContext } from '@/context/LanguageContext';

const Form = () => {
    const { lang } = useContext(LanguageContext);

    const { setIsKvkkOpen, setIsRulesOpen, setIsRedirectModalOpen } = useContext(ModalContext);
    const { setComplete, setError, setUserExist, setRateLimit } = useContext(FeedbackContex);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsRedirectModalOpen(true);
        
        const formData = new FormData(event.currentTarget);

        const password = generatePassword()

        const data = {
            fullName: formData.get("name")!.toString(),
            phoneNumber: formData.get("phone")!.toString(),
            email: formData.get("email")!.toString(),
            password: password,
            organization: formData.get("organization")!.toString(),
        }

        try {
            const res = await axios.post("../api/users", data);
            switch (res.status) {
                case 201:
                    localStorage.setItem("access", res.data.token);
                    setComplete(true);
                    break;
                case 200:
                    localStorage.setItem("access", res.data.token);
                    setUserExist(true);
                    break;
                case 401:
                    setIsRedirectModalOpen(false);
                    setError(true);
                    break;
                case 500:
                    setIsRedirectModalOpen(false);
                    setRateLimit(true);
                    break;
                default:
                    break;
            }
        } catch {
            setError(true);
        }

    }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4 mt-8'>
        <input required type="text" name="name" placeholder={lang == "tr" ? "İsim Soyisim Giriniz" : "Your Full Name"} className='inputStyle' />

        <input required type="tel" name="phone" placeholder={lang == "tr" ? "Telefon Numaranızı Giriniz" : "Your Phone Number"} className='inputStyle ' />

        <input required type="email" name="email" placeholder={lang == "tr" ? "Emailizi Giriniz" : "Email"} className='inputStyle ' />

        <input required type="text" name="organization" placeholder={lang == "tr" ? "Kurumunuz veya Okulunuz" : "Your Organization or School"} className='inputStyle' />

        <div className="w-full flex justify-start items-center mt-4">
        <input required type="checkbox" name="" className="w-5" />
        <p>
            {lang == "tr" ? (
                <><span onClick={() => setIsRulesOpen(true)} className="underline text-blue-500 ml-2 cursor-pointer">Topluluk Kuralları</span>nı okudum, onaylıyorum</>
            ) : (<>I read and accept the <span onClick={() => setIsRulesOpen(true)} className="underline text-blue-500 cursor-pointer">Community Guidelines</span></>)}
        </p>
        </div>

        <div className="w-full flex justify-start items-center -mt-3">
        <input required type="checkbox" name="" className="w-5" />
        <p>
            {lang == "tr" ? (<><span onClick={() => setIsKvkkOpen(true)} className="underline text-blue-500 ml-2 cursor-pointer">KVKK metni</span>ni okudum, onaylıyorum</>)
            : (<>I read and accept the <span onClick={() => setIsKvkkOpen(true)} className="underline text-blue-500 cursor-pointer">KVKK Text</span></>)}
        </p>
        </div>

        <div className='flex justify-between items-center mt-4'>
            <h2 className='text-4xl font-bold'>
                {lang == "tr" ? "Üye Olun" : "Sign Up"}
            </h2>
            <button type="submit" className='p-5 bg-orange-600 rounded-full'><ArrowForwardIcon sx={{ color: "white" }} /></button>
        </div>
    </form>
  )
}

export default Form