import { useState, createContext, useMemo } from 'react'

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
  product: {},
  setProduct: () => {},
  errorMsg: '',
  setErrorMsg: () => {},
  loading: Boolean,
  setLoading: () => {},
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [product, setProduct] = useState({})
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const contextValue = useMemo(
    () => ({
      products,
      setProducts,
      cart,
      setCart,
      errorMsg,
      setErrorMsg,
      loading,
      setLoading,
      product,
      setProduct,
    }),
    [products, errorMsg, loading, product, cart]
  )

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}
