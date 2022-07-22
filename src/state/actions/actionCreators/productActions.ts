import { Dispatch } from "redux";
import { ProductAction } from "../actions";
import { ProductType } from "../../../types/ProductType.type";
import { ActionType } from "../actionTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    let data: ProductType[] = [];
    const url =
      "https://my-json-server.typicode.com/wei30172/products-list-json/products";
    const res = await fetch(url);
    data = await res.json();
    // console.log(data);
    dispatch({
      type: ActionType.FECTCH_PRODUCTS,
      payload: data,
    });
  };
};

export const filterProducts =
  (products: ProductType[], size: string) =>
  (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ActionType.FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? products
            : products.filter(
                (product) => product.availableSizes.indexOf(size) >= 0,
              ),
      },
    });
  };

export const sortProducts =
  (filteredProducts: ProductType[], sort: string) =>
  (dispatch: Dispatch<ProductAction>) => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price < b.price
          ? -1
          : 1
        : sort === "highest"
        ? a.price > b.price
          ? -1
          : 1
        : sort === "latest"
        ? a._id > b._id
          ? -1
          : 1
        : a._id < b._id
        ? -1
        : 1,
    );
    // console.log(sortedProducts);
    dispatch({
      type: ActionType.ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: sortedProducts,
      },
    });
  };
