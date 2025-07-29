import React from 'react';
import Home from './Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <section className='px-16'>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default MainLayout;