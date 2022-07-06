import React from "react";
import ProductComponent from "./ProductComponent";
import LoadItems from "./LoadItems";
import "./ProductComponent.css";

const ProductListing = () => {
  const { isLoading, data } = LoadItems();
  return (
    <>
      {!isLoading ? (
        <div className="cards-container">
          <div className="cards">
            <ProductComponent products={data.data} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductListing;
