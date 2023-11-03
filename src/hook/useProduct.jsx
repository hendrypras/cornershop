import { useContext } from 'react'
import { callAPI } from '../domain/api'
import { ProductContext } from '../context/ProductContext'

const useProduct = () => {
  const { setProducts, setLoading, setProduct } = useContext(ProductContext)

  const getProducts = async () => {
    setLoading(true)
    try {
      const res = await callAPI({ endpoint: '/products', method: 'GET' })
      if (res) {
        setProducts(res)
      }
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getProduct = async productId => {
    setLoading(true)
    try {
      const res = await callAPI({
        endpoint: `/products/${productId}`,
        method: 'GET',
      })
      setProduct(res)
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }
  return {
    getProducts,
    getProduct,
  }
}

export default useProduct
