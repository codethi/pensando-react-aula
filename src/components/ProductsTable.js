import ProductCategory from "./ProductCategory"
import ProductRow from "./ProductRow"

export default function ProductsTable(props) {
    const { products, filterText, inStockOnly } = props

    let lastCategory
    const layout = []

    products.forEach((prod) => {
        // Se a checkbox de produto disponível estiver marcada
        // E o produto não estiver disponível, não mostra nada
        if (inStockOnly && !prod.stocked) {
            return
        }

        // Se tiver texto de busca e o produto não contiver o termo, não mostra
        if(!prod.name.toLowerCase().includes(filterText.toLowerCase())){
            return
        }

        // Precisa renderizar uma nova categoria?
        if (prod.category !== lastCategory) {
            layout.push(<ProductCategory key={prod.category} category={prod.category} />)
            lastCategory = prod.category
        }

        // Renderizar o produto em si
        layout.push(<ProductRow key={prod.name} product={prod} />)
    })

    return (
        <>
            {layout}
        </>
    )
}