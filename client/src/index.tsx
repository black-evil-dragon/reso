import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from '#pages/Index';
import Layout from '#pages/Layout';
import Test from '#pages/Test';
import NoPage from '#pages/NoPage';



ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
// <root>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Index />} />
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
// </root>
);
