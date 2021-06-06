import React from 'react'

export const AuthContext = React.createContext();


const AuthContextProvider = ({children}) => {

const signUp = () => {
    console.log('Sign Up Fn called');
}

const value = {
    currentUser: 'dwddwdw',
    signUp
}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
