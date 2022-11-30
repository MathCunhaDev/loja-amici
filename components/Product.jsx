import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, listPrice, bestPrice } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={200}
            height={300}
            className="product-image"
          />
          <p className="product-name">{name}</p>

          <div className='price-wrapper'>
            <p className="product-listprice">De R$ {listPrice}0</p>
            <p className="product-bestprice">Por R$ {bestPrice}0</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product