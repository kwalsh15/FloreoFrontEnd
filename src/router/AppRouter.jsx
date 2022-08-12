import { Routes, Route } from 'react-router-dom';
import { FloreoRoutes } from '../floreo';

export const AppRouter = () => {
    
    return (
        <>
            <Routes>
            
                <Route path="/*" element={<FloreoRoutes /> }/>

            </Routes>
        </>
    );
}
