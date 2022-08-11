import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, GalleryPage, HomePage } from '../floreo';
import { NavbarUi } from '../ui/components';

export const AppRouter = () => {
    
    return (
        <>
        
        <NavbarUi />

            <Routes>

            
                <Route path="home" element={<HomePage /> }/>

                <Route path="gallery" element={<GalleryPage /> }/>
                <Route path="about" element={<AboutPage /> }/>


                <Route path="/" element={<Navigate to="/home" />} />
            
            </Routes>
        </>
    );
}
