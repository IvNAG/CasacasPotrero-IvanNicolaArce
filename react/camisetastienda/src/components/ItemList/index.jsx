import React from "react";
import Item from "../Item";


const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <>
          <div className="container">
              <div className="card-item">
                <Item key={product.id} product={product} />
              </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
