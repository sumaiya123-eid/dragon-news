import { createContext, useEffect, useState } from "react"
import { auth } from "./firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
    }
    
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth , email ,password)
    }
    
    const update=(updatedData)=>{
        return updateProfile(auth.currentUser , updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUsers=>{
            setUser(currentUsers)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userSignOut=()=>{
        return signOut(auth)
    }


    const authInfo={
      createUser,
      userLogin,
      user,
      setUser,
      userSignOut,
      update, 
      loading
      
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
