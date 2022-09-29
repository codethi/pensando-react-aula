import { useState } from "react";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

export default function ProductsFilter(props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInSockOnly] = useState(false);

  const { products } = props;
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInSockOnly={setInSockOnly}
      />
      <ProductsTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </>
  );
}
