import axios from 'axios'

export const callAPI = async ({
  baseUrl,
  endpoint,
  method,
  headers,
  params,
  data,
}) => {
  const baseURL = baseUrl ? baseUrl : import.meta.env.VITE_BASE_URL_FAKESTORE
  const option = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  }
  const response = await axios(option)
  return response?.data
}
