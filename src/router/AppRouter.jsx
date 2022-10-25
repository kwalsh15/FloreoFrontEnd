import { Routes, Route } from 'react-router-dom';
import { FloreoRoutes } from '../floreo';
import { MembersPage } from '../floreo/pages/MembersPage';
import { NavbarUi } from '../ui/components';

export const AppRouter = () => {
    
    return (
        <>
            <NavbarUi />
            <Routes>
            
                <Route path="/*" element={<FloreoRoutes /> }/>
                <Route path="home/members" element={<MembersPage />} />

            </Routes>
        </>
    );
}
