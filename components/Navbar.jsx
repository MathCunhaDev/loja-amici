import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import { Cart } from './';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';
import { FaTruck, FaCreditCard, FaSyncAlt, FaLock } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="navbar-container">
      <div className="navbar-top">
      <div className="navbar-top-wrapper">
        <Slider {...settings}>
          <div className="navbar-slide-item">
          <FaTruck size={20}/>
            <p>Enviamos para todos o Brasil</p>
          </div>
          <div className="navbar-slide-item">
          <FaCreditCard size={20}/>
            <p>Parcelamos em até 12x</p>
          </div>
          <div className="navbar-slide-item">
          <FaSyncAlt size={20}/>
            <p>7 dias para trocas e devoluções</p>
          </div>
          <div className="navbar-slide-item">
          <FaLock size={20}/>
            <p>Site com Certificado SSL</p>
          </div>
        </Slider>
      </div>
      </div>
      <div className="navbar-bottom">
        <Link href="/">
          <Image
            alt="Picture of the author"
            width={153}
            height={29}
            src='/assets/logo.png'
          />
        </Link>

        {
          isMobile ? (
            <div className="categories"></div>
          ) : (
            <div className="categories">
              <a href="#" className='category'>Bermudas</a>
              <a href="#" className='category'>Calças</a>
              <a href="#" className='category'>Regatas</a>
              <a href="#" className='category'>Tops</a>
              <a href="#" className='category'>Contato</a>
            </div>
          )
        
        }
        

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>

    </div>
  )
}

export default Navbar