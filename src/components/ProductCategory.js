export default function ProductCategory(props) {
    const { category } = props
    return (
        <div className="product-category">
            {category}
        </div>
    )
}