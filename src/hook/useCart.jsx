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
      const { productId, quantity, product } = data
      const findProduct = await callAPI({
        endpoint: `/cart?productId=${productId}`,
        method: 'GET',
        baseUrl,
      })

      if (findProduct && findProduct.length > 0) {
        const cartFilter = findProduct?.filter(
          item => item.productId === productId
        )
        const newQty = quantity + (cartFilter[0] ? cartFilter[0].quantity : 0)
        const newPrice = newQty * cartFilter[0]?.product?.price
        const newData = {
          quantity: newQty,
          productId,
          price: newPrice,
          product,
        }
        await callAPI({
          endpoint: `/cart/${cartFilter[0]?.id}`,
          method: 'PUT',
          baseUrl,
          data: newData,
        })
      } else {
        await callAPI({
          endpoint: '/cart',
          method: 'POST',
          baseUrl,
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
