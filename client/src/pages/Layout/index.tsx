import React from 'react';
import { Outlet } from 'react-router-dom';


import Header from '#components/Header';
import Footer from '#components/Footer';

import '#styles/scss/index.scss'

function Layout() {
    return (
        <>  
            {/* App header component */}
            <Header />


            {/* App content */}
            <Outlet />


            {/* App footer component */}
            {/* <Footer /> */}
        </>
    );
}

export default Layout;