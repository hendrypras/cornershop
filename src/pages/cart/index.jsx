import React from 'react';
import styles from './cart.module.scss';
import { CartItem } from '../../components';

const CartPage = () => {
  return (
    <div className={styles.cart_page}>
      <p className={styles.title}>My Carts</p>
      <div className={styles.item_container}>
        <CartItem />
      </div>

      <p>
        Total Price: <span>$123</span>
      </p>
    </div>
  );
};

export default CartPage;
