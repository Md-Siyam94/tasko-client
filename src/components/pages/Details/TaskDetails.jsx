import React, { useContext } from 'react';
import { BiSolidEditAlt } from 'react-icons/bi';
import { TiDocumentAdd } from 'react-icons/ti';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import HeroImage from '../../../assets/heroImage.png'
import { AuthContext } from '../../../provider/AuthProvider';
import { LuCalendarRange } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import axios from 'axios';
import Swal from 'sweetalert2';
const TaskDetails = () => {
    const { user } = useContext(AuthContext)
    const task = useLoaderData()
    const params = useParams();
    const navigate = useNavigate()
    // console.log(params, task);

    const { image, time, title, category, status, _id } = task || {}


    const handleDeletedTask = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this Task on this app?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_baseAPI}/task/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/')
                        }
                    })
                    .catch(err => {
                        console.log('error from delete task', err);
                    })

            }
        });

    }














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
            <div className='w-11/12 mx-auto border rounded-xl p-5 z-10 -mt-16 bg-base-100'>
                <div className='flex justify-between '>
                    <h1 className='text-xl font-semibold col-span-2'>Task Details</h1>
                    <div className='flex  gap-3 items-center'>
                        <div>
                            <button className='flex gap-3 btn bg-red-100 text-[#FFAB00] hover:bg-red-200 '><BiSolidEditAlt className='text-2xl' /> Edit Task</button>
                        </div>
                        <div>
                            <NavLink to={'/'} className='py-2 px-10 border rounded-lg bg-teal-300 hover:bg-teal-400 '> Back</NavLink>
                        </div>
                    </div>
                </div>
                {/* details */}
                <div className='flex gap-8 '>
                    <img className='h-24 w-24 rounded-full object-cover' src={user?.photoURL} alt="" />
                    <div className='w-full'>
                        <div>
                            <h1 className='text-xl font-semibold'>{category}</h1>
                            <p className='opacity-60 mt-2 mb-6'>{title}</p>
                        </div>
                        <div className='flex items-center gap-32 '>
                            <div>
                                <p className='text-sm font-semibold mb-4'>End Date</p>
                                <p className='flex gap-3 items-center'><LuCalendarRange className='text-2xl' /> {time}</p>
                            </div>
                            <p className='text-lg font-semibold flex items-center gap-4'><GoDotFill />{status}</p>
                        </div>
                        <div className='mt-10'>
                            <p className='mb-4 text-sm'>Change Status</p>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled defaultValue={status}>{status}</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className="card-actions justify-end mt-28 items-end">
                            <button onClick={() => handleDeletedTask(_id)} className="py-2 px-16 border rounded-lg bg-red-200 hover:bg-red-300">Delete Task</button>
                            <button className="py-2 px-16 border rounded-lg bg-teal-300 hover:bg-teal-400">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;