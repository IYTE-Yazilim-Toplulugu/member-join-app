import { createContext, Dispatch, SetStateAction } from "react"

const FeedbackContextState = {
    error: false,
    setError: () => false,

    rateLimit: false,
    setRateLimit: () => false,

    userExist: false,
    setUserExist: () => false,

    complete: false,
    setComplete: () =>  false,

    counter: 6,
    setCounter: () => 0,
}

export type FeedbackContext = {
    error: boolean,
    setError: Dispatch<SetStateAction<boolean>>,

    rateLimit: boolean,
    setRateLimit: Dispatch<SetStateAction<boolean>>,

    userExist: boolean,
    setUserExist: Dispatch<SetStateAction<boolean>>,

    complete: boolean,
    setComplete: Dispatch<SetStateAction<boolean>>,

    counter: number,
    setCounter: Dispatch<SetStateAction<number>>
}

export const FeedbackContex = createContext<FeedbackContext>(FeedbackContextState);