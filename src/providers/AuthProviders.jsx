import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return unsubscribe();
    },[])
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
      
    const authInfu = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        providerLogIn, 

    }
    return (
        <AuthContext.Provider value={authInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;