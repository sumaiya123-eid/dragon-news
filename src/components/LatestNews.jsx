import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


export default function LatestNews() {
  return (
    <div className="flex items-center gap-3 bg-[#F3F3F3] p-3">
        <p className="bg-[#D72050] p-3 font-bold text-white">Latest</p>
        <Marquee pauseOnHover={true} className="space-x-10">
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur eaque distinctio odit sit libero doloremque excepturi id incidunt quia!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur eaque distinctio odit sit libero doloremque excepturi id incidunt quia!</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur eaque distinctio odit sit libero doloremque excepturi id incidunt quia!</Link>
        </Marquee>
    </div>
  )
}
