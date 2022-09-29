export default function SearchBar(props) {
    const { filterText, inStockOnly, setFilterText, setInSockOnly } = props
    return (
        <div className="search-bar">
            <input
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                type="text"
            />
            <div className="select">
                <input 
                    value={inStockOnly} 
                    onChange={() => setInSockOnly(!inStockOnly)}
                    type="checkbox"
                 />
                <span>Mostrar apenas itens disponíveis no estoque</span>
            </div>
        </div>
    )
}