import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import PlayList from './pages/PlayList'
import CreatePlayList from './pages/CreatePlaylist'

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-playlist" element={<CreatePlayList />} />
                <Route path="/playlist" element={<PlayList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
