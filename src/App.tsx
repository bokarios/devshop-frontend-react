import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import Root from './routes/root'
import ProductView from './views/ProductView'
import StoreView from './views/StoreView'
import NotFoundView from './views/NotFoundView'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route path="" element={<HomeView />} />
					<Route path="store" element={<StoreView />} />
					<Route path="product/:slug" element={<ProductView />} />
				</Route>
				<Route path="*" element={<NotFoundView />} />
			</Routes>
		</Router>
	)
}

export default App
