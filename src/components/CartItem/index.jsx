import React from 'react';
import styles from './CartItem.module.scss';
import { IconButton } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';

const CartItem = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__left}>
        <img
          className={styles.cart__image}
          src="https://via.placeholder.com/100x100/"
        />
        <div className={styles.cart__description}>
          <p className={styles.cart__name}>Product Name</p>
          <p className={styles.cart__category}>Category</p>
        </div>
      </div>
      <div className={styles.cart__counter}>
        <IconButton className={styles.counter_action}>
          <Remove />
        </IconButton>
        <span>2</span>
        <IconButton className={styles.counter_action}>
          <Add />
        </IconButton>
      </div>
      <div className={styles.cart__right}>
        <p className={styles.price}>$123</p>
        <IconButton>
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
