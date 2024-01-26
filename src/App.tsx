import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import Root from './routes/root'
import ProductView from './views/ProductView'
import StoreView from './views/StoreView'
import MenView from './views/MenView'
import NotFoundView from './views/NotFoundView'
import WomenView from './views/WomenView'
import ContactView from './views/ContactView'
import AboutView from './views/AboutView'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route path="" element={<HomeView />} />
					<Route path="store" element={<StoreView />} />
					<Route path="men" element={<MenView />} />
					<Route path="women" element={<WomenView />} />
					<Route path="contact" element={<ContactView />} />
					<Route path="about" element={<AboutView />} />
					<Route path="product/:slug" element={<ProductView />} />
				</Route>
				<Route path="*" element={<NotFoundView />} />
			</Routes>
		</Router>
	)
}

export default App
