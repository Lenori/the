import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'views/Home/Home';
import Projects from 'views/Projects/Projects';

export default function RouteManager() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
}
