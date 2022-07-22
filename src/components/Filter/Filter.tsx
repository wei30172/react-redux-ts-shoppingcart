import "./Filter.scss";
import { useState } from "react";
import {
  PropsFromRedux,
  filterConnector,
} from "../../state/connector/filterConnector";
import { ProductType } from "../../types/ProductType.type";

interface Props extends PropsFromRedux {
  sort: string;
  size: string;
  products: ProductType[];
  filteredProducts: ProductType[];
  filterProducts: (products: ProductType[], size: string) => void;
  sortProducts: (filteredProducts: ProductType[], sort: string) => void;
}

const Filter = ({
  sort = "defailt",
  size = "defailt",
  products,
  filteredProducts,
  filterProducts,
  sortProducts,
}: Props) => {
  const [order, setOrder] = useState("default");

  return !filteredProducts ? (
    <div>Loading...</div>
  ) : (
    <div className="filter">
      <div className="filter-result">{filteredProducts.length} Products</div>
      <div className="filter-sort">
        Order{" "}
        <select
          name="sort"
          id="sort"
          value={order}
          onChange={(e) => {
            sortProducts(filteredProducts, e.target.value);
            setOrder(e.target.value);
          }}
        >
          <option value="default">----</option>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Size{" "}
        <select
          name="size"
          id="size"
          value={size}
          onChange={(e) => {
            filterProducts(products, e.target.value);
            setOrder("defualt");
          }}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
    </div>
  );
};

export default filterConnector(Filter);
