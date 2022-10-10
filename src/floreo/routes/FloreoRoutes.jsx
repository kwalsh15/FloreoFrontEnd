import { Routes, Route, Navigate } from 'react-router-dom';
import { ImageCarousel, NavbarUi } from '../../ui/components';
import { HomePage, ServicePage } from '../';
import { Footer } from '../../ui/components/Footer';
import { useLoadingInformation } from '../../hooks/useLoadingInformation';

export const FloreoRoutes = () => {

    useLoadingInformation(); // Se carga la info del about

    
    return (
        <>
            <NavbarUi />
            <ImageCarousel images={['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://unsplash.it/2000/1250?image=689']} />

            
            <Routes>
            
                <Route path="home" element={<HomePage /> }/>

                <Route path="category/:service/" element= {<ServicePage />}/>

                <Route path="/*" element={<Navigate to="/home" />} />
            
            </Routes>

            <Footer />

        </>
    );
}
