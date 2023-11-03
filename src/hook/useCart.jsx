import { useContext } from 'react'
import { callAPI } from '../domain/api'
import { ProductContext } from '../context/ProductContext'
import toast from 'react-hot-toast'
const useCart = () => {
  const { setCart, setLoading, setErrorMsg } = useContext(ProductContext)
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
  const addToCart = async data => {
    setLoading(true)
    try {
      const { productId, quantity, ...rest } = data
      const findProduct = await callAPI({
        endpoint: `/cart?productId=${productId}`,
        method: 'GET',
        baseUrl,
      })
      if (findProduct) {
        const newQty = quantity + findProduct?.quantity
        const newData = { quantity: newQty, rest }
        await callAPI({
          endpoint: `/cart/${findProduct?.id}`,
          baseUrl,
          method: 'PATH',
          newData,
        })
      } else {
        await callAPI({
          endpoint: '/cart',
          baseUrl,
          method: 'POST',
          data,
        })
      }
      toast.success('Added to cart')
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }
  const removeProductCart = async cartId => {
    setLoading(true)
    try {
      await callAPI({ endpoint: `/cart/${cartId}`, method: 'DELETE', baseUrl })
      toast.success('Remove product from cart')
    } catch (error) {
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }
  return {
    getCart,
    addToCart,
    removeProductCart,
  }
}

export default useCart
