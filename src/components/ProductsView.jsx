import Products from "./Products";
import ProductFilters from "./ProductFilters";

import Api from "../hooks/api";
import SelectedProductContext from "../context/context";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const sortByOptions = {
  Price: "pricePerSecond",
  "Creation Date": "dateCreated",
};

const viewTypes = {
  grid: "grid",
  table: "table",
};

const ProductsView = () => {
  const [products, getProducts, getMoreProducts] = Api.useProducts();
  const [view, setView] = useState(viewTypes.grid);
  const [sortBy, setSortBy] = useState(sortByOptions["price"]);
  const [order, setOrder] = useState("desc");
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const [onlyFree, setOnlyFree] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedProduct] = useContext(
    SelectedProductContext
  );
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(searchString, order, sortBy, category, onlyFree);
  }, [searchString, sortBy, category, onlyFree, order]);

  const onSearch = (e) => {
    setSearchString(e.target.value);
  };
  const handleSortby = (selected) => {
    setSortBy(sortByOptions[selected]);
  };
  const handleOrder = (order) => {
    setOrder(order);
  };
  const handleCategory = (category) => {
    setCategory(category);
  };
  const handleCheckbox = (e) => {
    setOnlyFree(e.target.checked);
  };

  const handleGetMoreProducts = () => {
    getMoreProducts(searchString, order, sortBy, category, onlyFree);
  };
  const handleViewChange = (view) => {
    setView(view);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    navigate("/product");
  };

  return (
    <div>
      <ProductFilters
        handleSearch={onSearch}
        handleCheckbox={handleCheckbox}
        handleSortby={handleSortby}
        handleOrder={handleOrder}
        handleCategory={handleCategory}
        handleViewChange={handleViewChange}
      />
      <Products
        type={view}
        products={products}
        getMoreProducts={handleGetMoreProducts}
        selectProduct={handleSelectProduct}
      />
    </div>
  );
};

export default ProductsView;
