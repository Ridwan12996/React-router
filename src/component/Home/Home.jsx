import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header class="text-left items-center"></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;