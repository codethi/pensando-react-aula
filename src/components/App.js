import { GlobalStyle } from "../GlobalStyle";
import PRODUCTS from "../mock";
import ProductsFilter from "./ProductsFilter";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ProductsFilter products={PRODUCTS} />
    </>
  );
}
