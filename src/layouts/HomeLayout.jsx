import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftDiv from "../components/LeftDiv";
import Navbar from "../components/Navbar";
import RightDiv from "../components/RightDiv";


export default function HomeLayout() {
  return (
    <div>
        <section className="w-11/12 mx-auto">
        <Header></Header>
        </section>
        <section className="w-11/12 mx-auto my-5">
            <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
        <Navbar></Navbar>
        </section>
        <section className="w-11/12 mx-auto grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <LeftDiv></LeftDiv>
          </div>
          <div className="col-span-6">
            <Outlet></Outlet>
          </div>
          <div className="col-span-3">
            <RightDiv></RightDiv>
          </div>
        </section>
    </div>
  )
}
