import { useContext } from 'react'
import { callAPI } from '../domain/api'
import { ProductContext } from '../context/ProductContext'

const useCart = () => {
  const { setCart, setLoading } = useContext(ProductContext)
  const baseUrl = import.meta.env.VITE_BASE_URL_JSON_SERVER

  const getCart = async () => {
    setLoading(true)
    try {
      const res = await callAPI({ endpoint: '/cart', baseUrl, method: 'GET' })
      if (res) {
        setCart(res)
      }
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    getCart,
  }
}

export default useCart
