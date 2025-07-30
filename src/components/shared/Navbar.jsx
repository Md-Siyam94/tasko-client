import { BiSolidNotepad } from "react-icons/bi";
import { LuFerrisWheel } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { CiStopwatch } from "react-icons/ci";


const Navbar = () => {
    // const {name} = useContext(AuthContext)
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOutUser()
            .then(() => {

            })
            .catch(err => {
                console.log("error from log out", err);
            })
    }


    const links = <>
        <li className="text-md "><NavLink className={({ isActive }) =>
            isActive ? "text-teal-600 font-semibold" : "text-white"
        } to={'/'}><BiSolidNotepad className="text-xl" /> Task List</NavLink></li>


        <li className="text-md "><NavLink to={'/spin'} className={({ isActive }) =>
            isActive ? "text-teal-600 font-semibold" : "text-white"
        }><LuFerrisWheel className='rotate-180 text-xl' /> Spin</NavLink></li>
    </>
    return (
        <div className="navbar max-w-screen-2xl mx-auto  px-16 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <button className="btn btn-ghost text-white text-2xl"><CiStopwatch className="text-xl  " /> Tasko</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="flex gap-2 items-center">
                             <img
                            className="h-10 w-10 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                            src={user?.photoURL}
                            alt="" />
                            <p className="text-white">{user?.displayName}</p>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                            {/* <div className="px-4 mb-4 opacity-70">
                                {user?.displayName} <br />
                                {user?.email}
                            </div> */}

                            <li><button onClick={handleLogOut}>Log Out</button></li>
                        </ul>
                    </div>
                }


            </div>
        </div>
    );
};

export default Navbar;