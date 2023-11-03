import React from 'react';
import { Card, CardMedia } from '@mui/material';
import styles from './ProductCard.module.scss';
import { AddShoppingCart, Star } from '@mui/icons-material';

const ProductCard = () => {
  return (
    <Card className={styles.card}>
      <img
        src="https://via.placeholder.com/300x200/"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <p className={styles.card__name}>Product Name</p>
        <p>Category</p>
        <div className={styles.card__rating}>
          <Star /> <span>4.1</span> <span>(301)</span>
        </div>
      </div>
      <div className={styles.card__footer}>
        <p>$24.1</p>
        <AddShoppingCart />
      </div>
    </Card>
  );
};

export default ProductCard;
