import React, { useContext } from 'react';
import  { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex flex-col h-full my-56 items-center ">
            Loading...
            <BarLoader color="#185476"></BarLoader>
        </div>
    }

    if(user && user?.email){
        return children
    }
    return (
        <NavLink state={location.pathname} to={'/login'}></NavLink>
    )
};

export default PrivetRoute;