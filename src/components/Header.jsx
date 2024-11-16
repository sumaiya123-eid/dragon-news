import moment from "moment"
import logo from "../assets/assets/logo.png"

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
       <img className="w-[400px]" src={logo} alt="" />
       <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
       <p className="text-[#403F3F] font-semibold">{moment().format('dddd,LL')}</p>
    </div>
  )
}
