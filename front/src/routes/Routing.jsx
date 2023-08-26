import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../components/Home'
import { Updating } from '../components/Updating'
import { UploadComplete } from '../components/UploadComplete'
import { ImageProvider } from '../context/ImageProvider'



export const Routing = () => {
    return (
        <BrowserRouter>
            <ImageProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/uploading' element={<Updating />} />
                    <Route path='/done' element={<UploadComplete />} />

                </Routes>
            </ImageProvider>
        </BrowserRouter>
    )
}
