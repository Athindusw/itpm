import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Cart = (params) => {
  const history = useHistory();
  const { cartItems, onAdd, onRemove } = params;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  useEffect(() => {
    console.log(params);
  });

  return (
    <div className="container w-50">
      <h2>Cart Items</h2>
      <div> {cartItems.length === 0 && <div>Cart Is Empty</div>} </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row justify-content-center">
          <div className="col-2">{item.name}</div>
          <div className="col-2" style={{ marginTop: 5 }}>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>{' '}
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-3">
            {item.qty} x Rs. {item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">
              <strong>Items Price</strong>
            </div>
            <div className="col-2">
              <strong>Rs. {itemPrice.toFixed(2)}</strong>
            </div>
          </div>

          <hr />
          <div className="row">
            <button
              className="btn btn-success"
              onClick={() => {
                history.push('/payments/new');
              }}>
              Check Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};
