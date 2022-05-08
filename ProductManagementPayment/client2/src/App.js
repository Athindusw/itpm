import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductsPage } from './pages/ProductsPage';
import { Cart } from './components/Cart';
import { PaymentsPage } from './pages/PaymentsPage';
import { PaymentsUpdatePage } from './pages/PaymentsUpdatePage';

import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(window.localStorage.getItem('cartItems')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Header countCartItems={cartItems.length} />
      <Switch>
        <Route exact path="/">
          <ProductsPage
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAdd={onAdd}
          />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </Route>
        <Route exact path="/payments">
          <PaymentsPage
            newPayment={false}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Route>
        <Route exact path="/payments/new">
          <PaymentsPage
            newPayment={true}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Route>
        <Route exact path="/payments/update/">
          <PaymentsUpdatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
