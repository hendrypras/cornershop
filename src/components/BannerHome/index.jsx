import React from 'react'
import banner1 from '../../assets/images/header.jpg'
import style from './Banner.module.scss'
const BannerHome = () => {
  return (
    <section className={style.banner__wrapper}>
      <img src={banner1} alt="banner-home" />
    </section>
  )
}

export default BannerHome
