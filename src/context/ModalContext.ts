import { createContext, Dispatch, SetStateAction } from "react";

const ModalContextState = {
    isKvkkOpen: false,
    setIsKvkkOpen: () => false,

    isRulesOpen: false,
    setIsRulesOpen: () => false,

    isRedirectModalopen: false,
    setIsRedirectModalOpen: () => false,
}

export type ModalContext = {
    isKvkkOpen: boolean,
    setIsKvkkOpen: Dispatch<SetStateAction<boolean>>;

    isRulesOpen: boolean,
    setIsRulesOpen: Dispatch<SetStateAction<boolean>>;

    isRedirectModalopen: boolean,
    setIsRedirectModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContext>(ModalContextState);