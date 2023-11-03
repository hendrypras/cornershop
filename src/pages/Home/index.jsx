import React, { useContext, useEffect } from 'react'
import useProduct from '../../hook/useProduct'
import { ProductContext } from '../../context/ProductContext'
import style from './home.module.scss'
import { BannerHome, ProductCard } from '../../components'
import { useNavigate } from 'react-router-dom'
import useCart from '../../hook/useCart'
const HomePage = () => {
  const { getProducts } = useProduct()
  const { addToCart } = useCart()

  const navigate = useNavigate()
  const { products } = useContext(ProductContext)
  useEffect(() => {
    getProducts()
  }, [])

  const handleToDetail = productId => {
    navigate(`/detail/${productId}`)
  }

  return (
    <section className={style.home__container}>
      <div className={style.home__wrapper}>
        <BannerHome />
        <div className={style.card__wrapper}>
          {products?.map(val => {
            const dataForCart = {
              productId: val?.id,
              quantity: 1,
              price: val?.price,
            }
            return (
              <React.Fragment key={val?.id}>
                <ProductCard
                  data={val}
                  detailFunc={() => handleToDetail(val?.id)}
                  addToCart={() => addToCart(dataForCart)}
                />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomePage
