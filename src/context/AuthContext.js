import React, { useState, useEffect } from 'react'
import {auth} from '../authentication/firebase'
import { useHistory } from 'react-router-dom';

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

const signUp = async ({email, password}, cb) => {
    console.log('Sign Up Fn called', email, password);
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        cb && cb(true);
    } catch {
        alert('Error signing up')
    }
}

const logIn = async ({email, password}, cb) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        cb && cb(true);
    } catch {
        alert('Some Error Occured while logging in!');
    }
}

const logOut = () => {
   return auth.signOut();
}

const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
}

    return (
        <AuthContext.Provider value={value}>
            {!loading &&  children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
