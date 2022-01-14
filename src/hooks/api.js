import { useState } from "react";
import axios from "axios";

import { useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);

  const getProducts = async (search, order, sortBy, category, onlyFree) => {
    const params = {
      categories: category,
      search: search,
      order: order,
      sortBy: sortBy,
      publicAccess: "true",
      max: "20",
    };

    const result = await axios.request({
      method: "get",
      url: "https://streamr.network/api/v1/products",
      headers: {
        "Content-Type": "application/json",
        authorization: "",
      },
      params: params,
    });
    console.log(onlyFree);
    //if only free checkbox then filter products
    let prod;
    onlyFree
      ? (prod = result.data.filter((item) => item.isFree === true))
      : (prod = result.data);

    setProducts(prod);
    setCounter((counter) => counter + 20);
  };

  const getMoreProducts = async (search, order, sortBy, category, onlyFree) => {
    const params = {
      categories: category,
      search: search,
      order: order,
      sortBy: sortBy,
      publicAccess: "true",
      max: 20,
      offset: counter,
    };

    const result = await axios.request({
      method: "get",
      url: "https://streamr.network/api/v1/products",
      headers: {
        "Content-Type": "application/json",
        authorization: "",
      },
      params: params,
    });
    let prod;
    onlyFree
      ? (prod = result.data.filter((item) => item.isFree === true))
      : (prod = result.data);

    setProducts([...products, ...prod]);
    setCounter((counter) => counter + 20);
  };

  return [products, getProducts, getMoreProducts];
};

const useStreams = () => {
  const [streams, setStreams] = useState([]);

  const getStreams = async (id) => {
    const result = await axios.request({
      method: "get",
      url: `https://streamr.network/api/v1/products/${id}/streams`,
      headers: {
        "Content-Type": "application/json",
        authorization: "",
      },
    });
    setStreams(result.data);
  };

  return [streams, getStreams];
};

const useCategories = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const result = await axios.request({
      method: "get",
      url: "https://streamr.network/api/v1/categories",
      headers: {
        "Content-Type": "application/json",
        authorization: "",
      },
    });
    setCategory(result.data);
  };

  return categories;
};

const Api = { useProducts, useCategories, useStreams };
export default Api;
