'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
// import { useRouter } from 'next/navigation';

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
});
// const router = useRouter();
export default function useFirebaseAuth() {
    console.log("auth context imported")
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [Admin, setAdmin] = useState(false)
    const admins = ["mianabdullah125125@gmail.com"];


    const isAdmin = () => {
        setIsLoading(true)
        if (authUser && authUser.email) {
            console.log("user is available outer if is running")
            if (admins.includes(authUser.email)) {
                console.log("user is admin inner if is running")
                setAdmin(true)
                // return 
                // router.push('/');
            } else {
                setIsLoading(false); // User is an not admin, set loading to false
                setAdmin(false)
                console.log("loading false and user is not an admin else is running")
                // return
            }
        } else {
            console.log("loading false and user is not authenticated")
            setIsLoading(false); // User is not authenticated, set loading to false
            setAdmin(false)
            // return 
        }
    };

    const handleLoginButtonClick = () => {
        setLoginModalOpen(true);
        console.log("setLoginModalOpen")
    };
    const handleSignupButtonClick = () => {
        setRegisterModalOpen(true)
        console.log("setregristerModalOpen")
    };

    const clearUser = () => {
        setAuthUser(null);
        setIsLoading(false);
        console.log("clear user called");
    };
    const consol = () => {
        console.log("authContext console");
        console.log(authUser)
    };

    useEffect(() => {
        consol();

    }, []);
    const authStateChanged = async (user) => {
        setIsLoading(true);
        if (!user) {
            console.log("if part is running msg from auth")
            clearUser();
            return;
        }
        console.log(user)
        setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
        });
        setIsLoading(false);
    };

    const signOut = () => {
        authSignOut(auth).then(() => {
            clearUser();
            console.log("signout done");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unSubscribe();
    }, []);

    return {
        authUser,
        isLoading,
        setIsLoading,
        signOut,
        setAuthUser,
        handleLoginButtonClick,
        setLoginModalOpen,
        isLoginModalOpen,
        handleSignupButtonClick,
        isRegisterModalOpen,
        setRegisterModalOpen,
        isAdmin,
        admins,
        Admin,
        setAdmin
    };
}

export const AuthUserProvider = ({ children }) => {
    const auth = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);