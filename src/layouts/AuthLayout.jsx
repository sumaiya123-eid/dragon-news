import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function AuthLayout() {
  return (
    <div>
       <section className="w-11/12 mx-auto my-5">
       <Navbar></Navbar>
       </section>
        <Outlet></Outlet>
    </div>
  )
}
