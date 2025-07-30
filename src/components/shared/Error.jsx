import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/Screenshot 2025-07-30 180347.png'
import HeroImage from '../../assets/heroImage.png'
const Error = () => {

    
        const bgImage = {
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };
    return (
        <div>
            <div className='bg-black h-44 flex justify-between px-20'>
                <div className="w-[253px] h-[253px] rounded-full   opacity-30 blur-sm"></div>
                <div className='h-28 w-96 ' style={bgImage}></div>
                {/* <img className='h-56 w-72  ' src={HeroImage} alt="" /> */}
            </div>
            <div className='w-11/12 grid items-center justify-center mx-auto border rounded-xl p-5 z-10 -mt-16 bg-base-100'>
               
                <img className='mx auto' src={errorImage} alt="" />
                
                    <Link className=" py-3  text-center mt-4 font-semibold rounded-lg  bg-teal-300" to={"/"} >
                        Back To Home</Link>
                
            </div>
        </div>
    );
};

export default Error;