import { Link, NavLink } from "react-router-dom";
import img from "../assets/assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export default function Navbar() {
  const {user,userSignOut} = useContext(AuthContext)

  return (
    <div className="flex justify-between items-center">
        <div>
          {
            user?.email
          }
        </div>
        <div className="flex gap-3 *:text-[#706F6F] font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-3 items-center">
           {
            user ? <div>
              <img className="w-10 rounded-3xl" src={user.photoURL} alt="" />
              <h3>{user.displayName}</h3>
            </div> :  <img src={img} alt="" />
           }
            {
              user ?<button onClick={userSignOut} className="btn bg-[#403F3F] text-white font-bold rounded-none">Log Out</button> :<Link to="/auth/login" className="btn bg-[#403F3F] text-white font-bold rounded-none">Login</Link>
            }
        </div>
    </div>
  )
}
