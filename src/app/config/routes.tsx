import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {RoomsList} from '../modules/room-management/containers/rooms-list/rooms-list';
import {BookRoom} from "../modules/room-management/containers/book-room/book-room";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/rooms" element={<RoomsList />} />
                <Route path="/rooms/:roomName" element={<BookRoom />} />
                <Route path={'*'} element={<Navigate to="/rooms" />} />
            </Routes>
        </BrowserRouter>
    );
};

export {AppRouter}