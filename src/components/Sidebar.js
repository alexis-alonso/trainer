import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './side/User';
import Results from './side/Results'

export default function Sidebar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<User />} />
                <Route path="Results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
}
