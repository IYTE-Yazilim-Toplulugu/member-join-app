import { createContext, Dispatch, SetStateAction } from "react"


const SessionContextState = {
    session: "",
    setSession: () => "",
}

export type SessionContext = {
    session: string,
    setSession: Dispatch<SetStateAction<string>>,
}

export const SessionContext = createContext<SessionContext>(SessionContextState);