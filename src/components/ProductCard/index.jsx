import React from 'react'
import { Card } from '@mui/material'
import styles from './ProductCard.module.scss'
import { AddShoppingCart, Star } from '@mui/icons-material'

const ProductCard = ({ data, detailFunc, addToCart }) => {
  const priceFormated = data?.price?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (
    <Card className={styles.card}>
      <div onClick={detailFunc}>
        <img
          src={data?.image}
          className={styles.card__image}
          alt="product-image"
        />
      </div>
      <div className={styles.card__content}>
        <h1 className={styles.card__name}>{data?.title}</h1>
        <p className={styles.card__category}>{data?.category}</p>
        <div className={styles.card__rating}>
          <Star className={styles.card__icon__star} />{' '}
          <span>{data?.rating?.rate}</span>{' '}
          <span className={styles.card__count}>({data?.rating?.count})</span>
        </div>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.card__price}>{priceFormated}</p>
        <div className={styles.card__btn} onClick={addToCart}>
          <AddShoppingCart />
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
