import React from 'react';

import Components from '#components';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Components.Header />

            Layout

            <Outlet />

            <Components.Footer />
        </>
    );
}

export default Layout;