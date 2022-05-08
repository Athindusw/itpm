import React from 'react';
import { Product } from './Product';

export const Products = (params) => {
  const { product, onAdd } = params;

  return (
    <div className="row">
      {product.map((product, index) => (
        <div className="col" key={index} style={{ marginTop: 10 }}>
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        </div>
      ))}
    </div>
  );
};
