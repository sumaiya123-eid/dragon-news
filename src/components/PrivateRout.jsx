import { useContext } from "react"
import { AuthContext } from "../AuthProvider"
import { Navigate } from "react-router-dom"


export default function PrivateRout({children}) {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
  return (
    <Navigate to="/auth/login"></Navigate>
  )
}
