"use client"
import { FeedbackContex } from "@/context/FeedbackContext";
import { LanguageContext } from "@/context/LanguageContext";
import { ModalContext } from "@/context/ModalContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // Modals
    const [isKvkkOpen, setIsKvkkOpen] = useState<boolean>(false);
    const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
    const [isRedirectModalopen, setIsRedirectModalOpen] = useState<boolean>(false);

    // Language
    const [lang, setLang] = useState<string | null>("tr");
    const router = useRouter();
    const searchParams = useSearchParams();
    useEffect(() => {
        const browserLang = navigator.language;
        const language = browserLang.startsWith('tr') ? 'tr' : 'en';
        if (!searchParams.get('lg')) {
            const currentPath = window.location.pathname;
            router.push(`${currentPath}?lg=${language}`);
            setLang(language);
        }
        else {
            setLang(searchParams.get('lg'));
        }
    }, []);


    // Feedbacks
    const [error, setError] = useState<boolean>(false);
    const [userExist, setUserExist] = useState<boolean>(false);
    const [complete, setComplete] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(6);
    
    return (
        <main>
            <LanguageContext.Provider value={{ lang, setLang }}>
                <ModalContext.Provider value={{
                    isKvkkOpen, setIsKvkkOpen,
                    isRulesOpen, setIsRulesOpen,
                    isRedirectModalopen, setIsRedirectModalOpen
                }}>
                    <FeedbackContex.Provider value={{
                        error, setError,
                        userExist, setUserExist,
                        complete, setComplete,
                        counter, setCounter
                    }}>
                        {children}
                    </FeedbackContex.Provider>
                </ModalContext.Provider>
            </LanguageContext.Provider>
        </main>
    )
  }