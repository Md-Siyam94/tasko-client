import { createContext, use, useEffect, useState } from "react";
import auth from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = ()=>{
        setLoading(true)
        signOut(auth)
    }


    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
                setLoading(false)
        })
        return ()=>{
            unSubscrib()
        }
    },[])

    const name = "siyam"


    const authInfo = {
        name,
        user,
        loading,
        createUser,
        signInWithGoogle,
        signInUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;