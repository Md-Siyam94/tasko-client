import React, { useContext, useState } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from './shared/SocialLogin';
import Lottie from 'lottie-react';
import LoginAnimation from '../../public/login.json'
const LogIn = () => {

    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [showPass, setShowPass] = useState(false)
    const [error,setError] = useState("")

     const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);



        signInUser(data.email, data.password)
            .then(result => {
                setError("")
                navigate("/")

            })
            .catch(err => {
                console.log("Error from login page", err.code)
                setError(err.code)
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" text-center lg:text-left">

                 
                    <Lottie
                animationData={LoginAnimation}
                loop={true}
                autoPlay={true}
                style={{width: "70%", height: "600px", margin: "auto"}}

                >

                </Lottie>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center mt-2">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            <div className='mt-2'>
                                {errors.email?.type === 'required' && <p role="alert" className='text-red-600'>Please fill the email field!</p>}
                            </div>
                        </div>
                        {/* password field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered relative" />
                            <button onClick={() => setShowPass(!showPass)} className='absolute mt-12 pt-1 ml-72'>
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                            <div className='mt-2'>
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-600'>Give your password to login!</p>}
                            </div>
                            <label className="label">
                                <button  className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div>
                            <p className='text-sm text-red-600 '>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-600 hover:bg-teal-700 text-white">Login</button>
                        </div>
                        <div>
                            <p className='text-center mt-2'>Don't have any account ? <Link to={"/signup"} className='text-blue-800 font-semibold'>Sign up</Link></p>
                        </div>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;