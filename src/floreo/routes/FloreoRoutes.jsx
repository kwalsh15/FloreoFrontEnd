import { Routes, Route, Navigate } from 'react-router-dom';
import { NavbarUi } from '../../ui/components';
import { HomePage, GalleryPage, AboutPage } from '../';
import { Footer } from '../../ui/components/Footer';

export const FloreoRoutes = () => {
    
    return (
        <>
            <NavbarUi />
            
            <Routes>
            
                <Route path="home" element={<HomePage /> }/>

                <Route path="gallery" element={<GalleryPage /> }/>
                <Route path="about" element={<AboutPage /> }/>


                <Route path="/" element={<Navigate to="/home" />} />
            
            </Routes>

            <Footer />

        </>
    );
}
