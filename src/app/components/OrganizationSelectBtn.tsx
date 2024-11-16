import { RegistirationContext } from '@/context/RegistirationContext'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext';

const OrganizationSelectBtn = () => {
    const {reg, setRegistiration } = useContext(RegistirationContext);
    const { lang } = useContext(LanguageContext);
    const router = useRouter();

    const searchParams = useSearchParams();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams);

    const handleButtonClick = (isInternal: boolean) => {
        setRegistiration(isInternal);
        params.set("rg", `${isInternal}`);
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className='flex justify-center -mt-24 relative h-20'>
            <div className="relative w-[600px] h-16 border-4 rounded-full border-[#feac52]">
                <div 
                    className={`absolute w-1/2 h-full bg-[#feac52] rounded-full transition-transform duration-300 ease-in-out ${
                        reg ? 'translate-x-0' : 'translate-x-full'
                    }`}
                />
                <div className="relative flex items-center text-sm font-bold">
                    <button
                        className={`w-1/2 py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out text-center flex items-center justify-center ${
                            reg ? 'text-white' : 'text-black'
                        }`}
                        onClick={() => handleButtonClick(true)}
                    >
                        {lang == "tr" ? "Enstitüsü İçi Kayıt Sistemi" : "Institute Member Registration"}
                    </button>
                    <button
                        className={`w-1/2 py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out ${
                            !reg ? 'text-white' : 'text-black'
                        }`}
                        onClick={() => handleButtonClick(false)}
                    >
                        {lang == "tr" ? "Enstitüsü Dışı Kayıt Sistemi" : "Non-institute Member Registration"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrganizationSelectBtn;