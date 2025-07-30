import React, { useContext } from 'react';
import { GoDotFill } from 'react-icons/go';
import { LuCalendarRange } from 'react-icons/lu';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';

const TaskCard = ({ task }) => {
    const { user } = useContext(AuthContext)
    console.log(task);
    const { category, title, image, _id, time, status } = task || {}
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
           <NavLink to={`/details/${_id}`}>
             <div className="card-body">
                <div className='flex gap-4'>
                    <img className='h-8 w-8 object-cover rounded-full' src={user?.photoURL} alt="" />
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <h2 className="card-title">{category}</h2>
                            <button><AiTwotoneDelete className='text-xl text-red-600' /></button>
                        </div>
                        <p className='mb-6 mt-2'>{title}</p>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <p className='flex items-center text-sm gap-4'><LuCalendarRange className='text-2xl' /> {time}</p>
                    <p className="flex items-center justify-end gap-1 "><GoDotFill /> {status}</p>
                </div>
            </div>
           </NavLink>
        </div>
    );
};

export default TaskCard;