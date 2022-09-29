export default function ProductRow(props) {
    const { name, price, stocked } = props.product
    return (
        <div className={`product-row ${!stocked ? "not-in-stock" : ""}`}>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}