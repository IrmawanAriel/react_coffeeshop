import { createContext, useState } from 'react'
import { useContext } from 'react'

type signInState = { //definisi type state
    token: string;
    deleteToken: () => void;
    assignToken: (token: string) => void;
}

const userTokenContext = createContext<signInState>({ token: '', deleteToken() { }, assignToken() { } }) //create varibale context baru

export function useSignInState() { // method pemanggil context
    return useContext<signInState>(userTokenContext);
}

export function SignInToken({ children }: { children: JSX.Element }) {

    const [token, setToken] = useState('');

    const assignToken = (NewToken: string) => {
        setToken(NewToken);
    }

    const deleteToken = () => {
        setToken('')
    }

    return (
        <userTokenContext.Provider value={{
            token,
            assignToken,
            deleteToken,
        }} >{children}</userTokenContext.Provider>
    )
}
