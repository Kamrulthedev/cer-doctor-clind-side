import { createContext, useEffect, useState } from "react";
import auth from "../fierbase/Fierbase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvideres = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)



    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            console.log('current user', currenUser)
            setLoding(false)
        });
        return () => {
            return unsubcribe
        }
    }, [])

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvideres;