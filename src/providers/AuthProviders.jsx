import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,  signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [userData, setUserData] = useState({
        isAuthenticated: false,
        user: null,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUserData({
                    isAuthenticated: true,
                    user: currentUser,
                });
            } else {
                setUserData({
                    isAuthenticated: false,
                    user: null,
                });
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const providerLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUserData({
                    isAuthenticated: true,
                    user: user,
                });
                return userCredential;
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUserData({
                    isAuthenticated: true,
                    user: user,
                });
                return userCredential;
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUserData({
                    isAuthenticated: false,
                    user: null,
                });
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    };

    const authInfu = {
        user: userData.user,
        loading: loading,
        createUser: createUser,
        signIn: signIn,
        logOut: logOut,
        providerLogIn: providerLogIn,
    };

    return (
        <AuthContext.Provider value={authInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
