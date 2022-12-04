import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { client } from '../lib/client';
import { Product,  HeroBanner } from '../components';
import CategoriesRow from '../components/CategoriesRow';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

const Home = ({ products, bannerData }) => {

  const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return(
    <div>
    <HeroBanner />
    <div className="products-heading">
      <h2>Mais vendidos</h2>
    </div>

    <div className='shelf-container'>
      <Slider {...settings}>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </Slider>
    </div>

    <CategoriesRow />

    <div className="products-heading">
      <h2>Nossos Destaques</h2>
    </div>
    <div className='shelf-container'>
      <Slider {...settings}>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </Slider>
    </div>

    <div className='banner-destaque'>
      <Image
        alt=""
        width={`${isMobile ? 640 : 465}`}
        height={`${isMobile ? 300 : 173}`}
        src={`${isMobile ? '/assets/banner-destaque-mobile-1.jpg': '/assets/banner-destaque-1.jpg'}`}
      />
      <div className='banner-destaque-column'>
        <Image
          alt=""
          width={`${isMobile ? 640 : 465}`}
          height={`${isMobile ? 300 : 173}`}
          src={`${isMobile ? '/assets/banner-destaque-mobile-2.jpg': '/assets/banner-destaque-1.jpg'}`}
        />
        <Image
          alt=""
          width={`${isMobile ? 640 : 465}`}
          height={`${isMobile ? 300 : 173}`}
          src={`${isMobile ? '/assets/banner-destaque-mobile-3.jpg': '/assets/banner-destaque-1.jpg'}`}
        />
      </div>
    </div>
  </div>
  )
}
  
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
