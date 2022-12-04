import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const isMobile = typeof window !== "undefined" && window.innerWidth < 1024


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
            width={`${isMobile ? 640: 450}`}
            height={`${isMobile ? 785: 450}`}
            src={`${isMobile ? '/assets/banner-mobile.jpg' : '/assets/banner-desktop.jpg'}`}
          />
        </Link>
        <Link href="/">
          <Image
            width={`${isMobile ? 640: 450}`}
            height={`${isMobile ? 785: 450}`}
            src={`${isMobile ? '/assets/banner-mobile.jpg' : '/assets/banner-desktop.jpg'}`}
          />
        </Link>
        <Link href="/">
          <Image
            width={`${isMobile ? 640: 450}`}
            height={`${isMobile ? 785: 450}`}
            src={`${isMobile ? '/assets/banner-mobile.jpg' : '/assets/banner-desktop.jpg'}`}
          />
        </Link>
      </Slider>
    </div>
  )
}

export default HeroBanner