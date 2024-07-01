import { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

type signInState = { //definisi type state
    token: string;
    id: number | string;
    deleteToken: () => void;
    useID: (id: number) => void;
    deleteID: (id: number) => void;
    assignToken: (token: string) => void;
}

const userTokenContext = createContext<signInState>({ token: '', id: '' ,deleteToken() { }, deleteID() { }, useID() { }, assignToken() { } }) //create varibale context baru

export function useSignInState() { // method pemanggil context
    return useContext<signInState>(userTokenContext);
}

export function SignInToken({ children }: { children: JSX.Element }) {

    const [token, setToken] = useState('');
    const [id, setId] = useState(-1);

    const useID = (idUser: number) => {
        setId(idUser)
    }

    const deleteID = () => {
        setId(-1)
    }

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    const assignToken = (NewToken: string) => {
        setToken(NewToken);
    }

    const deleteToken = () => {
        localStorage.removeItem('token');
        setToken('');
    }

    return (
        <userTokenContext.Provider value={{
            token,
            id,
            useID,
            deleteID,
            assignToken,
            deleteToken,
        }} >{children}</userTokenContext.Provider>
    )
}
