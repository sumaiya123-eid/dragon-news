import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

export default function Register() {
    const navigate = useNavigate()
   const {createUser,setUser,update} = useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then(result => {
            setUser(result.user)
            update({displayName:name , photoURL:photo})
            .then(navigate('/'))
        })
        .catch(error=>alert(error.message))
    }

  return (
    <div className=" flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleRegister} className="card-body">
    <h3 className="font-bold text-2xl text-center">Register Your Account</h3>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-neutral rounded-none">Register</button>
    </div>
  </form>
</div>
</div>
  )
}
