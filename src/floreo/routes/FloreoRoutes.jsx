import { Routes, Route, Navigate } from 'react-router-dom';
import { ImageCarousel, NavbarUi } from '../../ui/components';
import { HomePage, ServicePage } from '../';
import { Footer } from '../../ui/components/Footer';
import { useLoadingInformation } from '../../hooks/useLoadingInformation';
import { useLoadingImageCarousel } from '../../hooks/useLoadingImageCarousel';
import { useLoadingSubscribers } from '../../hooks/useLoadingSubscribers';
import { useSelector } from 'react-redux';

export const FloreoRoutes = () => {

	useLoadingInformation(); // Se carga la info del about
	useLoadingImageCarousel();
	useLoadingSubscribers();

	const { images } = useSelector((state) => state.imageCarousel);

	return (
		<>
			<NavbarUi />
			{ images.length > 0 ? <ImageCarousel images={images} /> :
				<div style={{height: '50vh'}} className="d-flex flex-column justify-content-center align-items-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			}
			<Routes>
				<Route path="home" element={<HomePage />} />
				<Route path="category/:service/" element={<ServicePage />} />
				<Route path="/*" element={<Navigate to="/home" />} />
			</Routes>
			<Footer />
		</>
	);
}
