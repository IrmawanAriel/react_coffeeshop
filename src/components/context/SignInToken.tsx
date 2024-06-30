import { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

type signInState = { //definisi type state
    token: string;
    isLogin: boolean;
    deleteToken: () => void;
    assignToken: (token: string) => void;
}

const userTokenContext = createContext<signInState>({ token: '', isLogin: false ,deleteToken() { }, assignToken() { } }) //create varibale context baru

export function useSignInState() { // method pemanggil context
    return useContext<signInState>(userTokenContext);
}

export function SignInToken({ children }: { children: JSX.Element }) {

    const [token, setToken] = useState('');
    const [isLogin, setLogin] = useState(false);


    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    const assignToken = (NewToken: string) => {
        setToken(NewToken);
        setLogin(true);
    }

    const deleteToken = () => {
        setLogin(false);
        localStorage.removeItem('token');
        setToken('');
    }

    return (
        <userTokenContext.Provider value={{
            token,
            isLogin,
            assignToken,
            deleteToken,
        }} >{children}</userTokenContext.Provider>
    )
}
