import { createContext, Dispatch, SetStateAction } from "react";

const RegistirationContextState = {
  reg: true,
  setRegistiration: () => true,
};


export type RegistirationContext = {
    reg: boolean,
    setRegistiration: Dispatch<SetStateAction<boolean>>
}

export const RegistirationContext = createContext<RegistirationContext>(RegistirationContextState);
