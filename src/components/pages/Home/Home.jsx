import React, { useEffect, useState } from 'react';
import { TiDocumentAdd } from 'react-icons/ti';
import TaskCard from '../../TaskCard';
import HeroImage from'../../../assets/heroImage.png'

const Home = () => {

    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_baseAPI}/tasks`)
        .then(res=> res.json())
        .then(data=> {
            setTasks(data)
        })
    },[])


  const bgImage = {
 
  backgroundImage: `url(${HeroImage})`,
   backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
    return (
        <div>
           <div className='bg-black h-72 flex justify-between px-20'>
           <div className="w-[253px] h-[253px] rounded-full   opacity-30 blur-sm"></div>
           <div className='h-56 w-96 ' style={bgImage}></div>
             {/* <img className='h-56 w-72  ' src={HeroImage} alt="" /> */}
           </div>
            <div className='w-11/12 mx-auto border rounded-xl p-5 z-10 -mt-16 bg-base-100 '>
                <div className='grid grid-cols-5 justify-between '>
                    <h1 className='text-2xl font-semibold col-span-2'>All Task List</h1>
                    <div className='flex col-span-3 gap-3 '>
                        <div className='w-full'>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <select className="select select-bordered w-full max-w-sm">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div>
                            <button className='flex gap-3 btn btn-accent lg:w-60'><TiDocumentAdd className='text-2xl' /> Add New Task</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
                    {
                        tasks.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;