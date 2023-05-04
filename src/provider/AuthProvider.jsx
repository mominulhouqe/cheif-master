import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(ture)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

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
        createUser, // change from creatUser
        signIn,
        signOut,
        logOut
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
