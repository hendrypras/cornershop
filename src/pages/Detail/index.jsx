import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../hook/useProduct";
import { ProductContext } from "../../context/ProductContext";
import styles from "./detail.module.scss";
import StarIcon from "@mui/icons-material/Star";
import useCart from "../../hook/useCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DetailPage = () => {
  const { productId } = useParams();
  const { getProduct, getProducts } = useProduct();
  const { getCart } = useCart(ProductContext);
  const { product, cart, products } = useContext(ProductContext);
  const [productsSlice, setProductsSlice] = useState([]);

  useEffect(() => {
    Promise.all([getProduct(productId), getCart()]);

    if (products.length === 0) {
      getProducts();
    } else {
      sliceProducts();
    }
  }, [productId]);

  const sliceProducts = () => {
    const sliced = products?.slice(0, 5);
    setProductsSlice(sliced);
  };
  console.log(productsSlice);

  const isProductInCart = cart?.some((cart) => cart?.id === product?.id);

  return (
    <>
      <div className={styles.detailPage}>
        <div className={styles.detailProduct}>
          <div className={styles.detailProduct__imgContainer}>
            <img src={product.image} alt={product.title} className={styles.detailProduct__img} />
          </div>
          <div className={styles.detailProduct__desc}>
            <h1>{product.title}</h1>
            <div className={styles.detailProduct__rates}>
              <StarIcon className={styles.detailProduct__ic} />
              <span>{product?.rating?.rate}</span>
              <label>({product?.rating?.count} rating)</label>
            </div>
            <div className={styles.detailPage__categories}>
              <button>{product.category}</button>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div className={styles.btnContainer}>
              {!isProductInCart ? (
                <button className={styles.btn}>
                  Add to cart <ShoppingCartIcon />
                </button>
              ) : (
                <button className={styles.btn}>Quantity</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
