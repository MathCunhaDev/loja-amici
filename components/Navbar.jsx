import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cart } from './';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <Link href="/">
        <Image
          alt="Picture of the author"
          width={153}
          height={29}
          src='/assets/logo.png'
        />
      </Link>

      <div className="categories">
        <a href="#" className='category'>Bermudas</a>
        <a href="#" className='category'>Calças</a>
        <a href="#" className='category'>Regatas</a>
        <a href="#" className='category'>Tops</a>
        <a href="#" className='category'>Contato</a>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar