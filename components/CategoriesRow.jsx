import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoriesRow = () => {
  return (
    <div className="categories-column">
      <p className="categories-title">Navegue pelas nossa principais categorias</p>
      <div className="categories-row-container">
        <Link href="/">
          <div className="categories-row-item">
            <Image
              alt=""
              width={100}
              height={100}
              src='/assets/bermuda-circle.png'
            />
            <p>Bermudas</p>
          </div>
        </Link>
        <Link href="/">
          <div className="categories-row-item">
            <Image
              alt=""
              width={100}
              height={100}
              src='/assets/legging-circle.png'
            />
            <p>Calças</p>
          </div>
        </Link>
        <Link href="/">
          <div className="categories-row-item">
            <Image
              alt=""
              width={100}
              height={100}
              src='/assets/regata-circle.png'
            />
            <p>Regatas</p>
          </div>
        </Link>
        <Link href="/">
          <div className="categories-row-item">
            <Image
              alt=""
              width={100}
              height={100}
              src='/assets/top-circle.png'
            />
            <p>Tops</p>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default CategoriesRow