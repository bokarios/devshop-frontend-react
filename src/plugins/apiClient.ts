import axios from 'axios'

const getToken = () => localStorage.getItem('devshop-react-token')

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-type': 'multipart/form, application/json',
		Accept: 'application/json',
	},
})

apiClient.interceptors.request.use((req) => {
	req.headers.Authorization = `Bearer ${getToken()}`
	return req
})

apiClient.interceptors.response.use(
	(res) => {
		return res
	},
	(error) => {
		const { response }: any = { ...error }
		if (response.data.message === 'Unauthenticated.') {
			// Unauthorized access
			localStorage.removeItem('devshop-react-token')
		}
		return Promise.reject(response)
	}
)

export default apiClient
