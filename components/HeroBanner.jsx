import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HeroBanner = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="hero-banner-container">
      <Slider {...settings}>
        <Link href="/">
          <Image
            width={1280}
            height={450}
            src='/assets/banner-desktop.jpg'
          />
        </Link>
        <Link href="/">
          <Image
            width={1280}
            height={450}
            src='/assets/banner-desktop.jpg'
          />
        </Link>
        <Link href="/">
          <Image
            width={1280}
            height={450}
            src='/assets/banner-desktop.jpg'
          />
        </Link>
      </Slider>
    </div>
  )
}

export default HeroBanner