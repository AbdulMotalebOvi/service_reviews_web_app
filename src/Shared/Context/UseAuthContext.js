import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthUseContext = createContext();
const auth = getAuth(app)
const UseAuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // provider
    const googleProvider = new GoogleAuthProvider();
    const faceBooKprovider = new FacebookAuthProvider();
    const guthubProvider = new GithubAuthProvider()

    const sigunUpWIthEmailANdPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createuserByGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createuserByFacebook = () => {
        return signInWithPopup(auth, faceBooKprovider)
    }
    const createuserByGithub = () => {
        return signInWithPopup(auth, guthubProvider)
    }

    const updateUSer = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscRibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscRibe()
    }, [])
    const authInfo = {
        user,
        loading,
        sigunUpWIthEmailANdPassword,
        updateUSer,
        createuserByGoogle,
        createuserByFacebook,
        createuserByGithub,
        signIn,
        logOut
    }
    return (
        <AuthUseContext.Provider value={authInfo}>
            {children}
        </AuthUseContext.Provider>
    );
};

export default UseAuthContext;