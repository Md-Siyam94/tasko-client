import React from 'react';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <section className=''>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default MainLayout;