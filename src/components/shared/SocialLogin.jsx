import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then(result =>{
            navigate('/')
        })
        .catch(err=>{
            console.log(err.message);
        })
    }



    return (
       <div>
            <button onClick={handleGoogleLogin} className="flex gap-2 items-center btn w-full"><FcGoogle  className="text-3xl"/> <span className="font-semibold">Login With Google</span></button>
        </div>
    );
};

export default SocialLogin;