import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { client } from '../lib/client';
import { Product,  HeroBanner } from '../components';
import CategoriesRow from '../components/CategoriesRow';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        width={465}
        height={375}
        src='/assets/banner-destaque-1.jpg'
      />
      <div className='banner-destaque-column'>
        <Image
          alt=""
          width={475}
          height={173}
          src='/assets/banner-destaque-2.jpg'
        />
        <Image
          alt=""
          width={475}
          height={173}
          src='/assets/banner-destaque-3.jpg'
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
