import React from "react";
import { Products } from "../components/Products";
import data from "./data";

export const ProductsPage = (params) => {
  const { product } = data;
  const { onAdd } = params;

  return (
    <>
      <div className="container">
        <Products onAdd={onAdd} product={product} />
      </div>
    </>
  );
};
