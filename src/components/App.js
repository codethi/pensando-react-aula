import PRODUCTS from "../mock"
import ProductsFilter from "./ProductsFilter"


export default function App() {
    return (
        <ProductsFilter products={PRODUCTS}/>
    )
}