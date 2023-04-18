import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './side/Layout';
import User from './side/User';
import Results from './side/Results'

export default function Sidebar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<User />} />
                    <Route path="Results" element={<Results />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
