import apiClient from "../plugins/apiClient"

const api = {
  allProducts(sort: string) {
    const order = sort === "new first" ? "asc" : "desc"
    return apiClient.get(`products?sort=${order}`)
  },

  categoryProducts(sort: string, category: string) {
    const order = sort === "new first" ? "asc" : "desc"
    return apiClient.get(`products/category/${category}?sort=${order}`)
  },

  oneProduct(id: number) {
    return apiClient.get("products/" + id)
  },

  featuredAPi() {
    return apiClient.get("products?limit=5")
  },
}

export default api
