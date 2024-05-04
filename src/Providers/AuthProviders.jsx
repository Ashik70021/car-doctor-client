import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Create User
    const signupUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User login

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update user
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            // photoURL: image
          })
    }

    // logout

    const logout = () => {
        signOut(auth)
    }

    
    // observer
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser(null);
            }
          });
          return () =>{
            unsubscribe()
          }
    },[])



    const authInfo = {
        user,loading,
        signupUser,signinUser,logout,
        updateUser,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;