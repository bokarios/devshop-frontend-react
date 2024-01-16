import FeaturedProducts from '../components/FeaturedProducts'
import HomeHero from '../components/HomeHero'
import LimitedTimeOffer from '../components/LimitedTimeOffer'
import OurAttributes from '../components/OurAttributes'
import TopDeals from '../components/TopDeals'

const HomeView = () => {
	return (
		<>
			<HomeHero />
			<TopDeals />
			<FeaturedProducts />
			<LimitedTimeOffer />
			<OurAttributes />
		</>
	)
}

export default HomeView
