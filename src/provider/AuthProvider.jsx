import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const signInGithub =()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    };
    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, loggedUser =>{
             console.log('logeed in user authState change', loggedUser);
             setUser(loggedUser);
             setLoading(false)
         })
         return() =>{
             unsubscrib();
         }
     },[])
     

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInGoogle,
        signInGithub
        
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
