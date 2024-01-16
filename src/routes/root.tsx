import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import FooterComponent from '../components/FooterComponent'

const root = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
			<FooterComponent />
		</>
	)
}

export default root
