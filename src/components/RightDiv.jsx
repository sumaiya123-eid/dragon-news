import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


export default function RightDiv() {
  return (
    <div>
        <h3 className="font-bold">Login With</h3>
        <div className="flex flex-col gap-3 my-5">
            <button className="btn btn-outline btn-info"><FaGoogle></FaGoogle>Login With Google</button>
            <button className="btn btn-outline btn-success"><FaGithub></FaGithub>Login With Github</button>
        </div>
        <h3 className="font-bold">Find Us On</h3>
        <div className="my-5">
        <div className="join flex join-vertical *:bg-white">
  <button className="btn join-item"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn join-item"><FaTwitter></FaTwitter>Twitter</button>
  <button className="btn join-item"><FaInstagram></FaInstagram>Instagram</button>
</div>
        </div>
    </div>
  )
}
