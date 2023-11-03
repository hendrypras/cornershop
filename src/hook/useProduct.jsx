import { useContext } from 'react'
import { callAPI } from '../domain/api'
import toast from 'react-hot-toast'
import { ProductContext } from '../context/ProductContext'

const useAccountPassword = () => {
  const { setProducts, setLoading } = useContext(ProductContext)

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

  const getProduct = async id => {
    try {
      const res = await callAPI({
        endpoint: `/password/${id}`,
        method: 'GET',
      })

      setDetailAccount(res)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return {
    savePassword,
    getProducts,
    deleteAccount,
    getAccount,
  }
}

export default useAccountPassword
