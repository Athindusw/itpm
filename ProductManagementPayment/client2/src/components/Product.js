import React from 'react';

export const Product = (params) => {
  const { product, onAdd } = params;

  return (
    <div className="card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ width: 300, height: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Rs. {product.price}/=</p>
        <div className="row">
          <button className="btn btn-primary" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
