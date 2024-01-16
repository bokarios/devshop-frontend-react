import apiClient from '../plugins/apiClient'

const api = {
	allProducts() {
		return apiClient.get('products')
	},

	oneProduct(id: number) {
		return apiClient.get('products/' + id)
	},

	featuredAPi() {
		return apiClient.get('products?featured=1')
	},
}

export default api
