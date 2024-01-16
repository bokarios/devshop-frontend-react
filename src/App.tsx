import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import Root from './routes/root'
import ProductView from './views/ProductView'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route path="" element={<HomeView />} />
					<Route path="product/:slug" element={<ProductView />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
