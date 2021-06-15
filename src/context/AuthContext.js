import React, { useState, useEffect } from 'react'
import {auth} from '../authentication/firebase'

export const AuthContext = React.createContext();


const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true)

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false);
    }) 

    return unsubscribe
}, [])

const signUp = async ({email, password}) => {
    console.log('Sign Up Fn called', email, password);
    try {
        await auth.createUserWithEmailAndPassword(email, password);
    } catch {
        alert('Error signing up')
    }
}

const value = {
    currentUser,
    signUp
}

    return (
        <AuthContext.Provider value={value}>
            {!loading &&  children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
