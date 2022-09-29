import styled from "styled-components";

export default function SearchBar(props) {
  const { filterText, inStockOnly, setFilterText, setInSockOnly } = props;
  return (
    <SearchBarContainer>
      <InputContainer
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
      />
      <SelectContainer>
        <InputContainer
          value={inStockOnly}
          onChange={() => setInSockOnly(!inStockOnly)}
          type="checkbox"
        />
        <span>Mostrar apenas itens disponíveis no estoque</span>
      </SelectContainer>
    </SearchBarContainer>
  );
}

const InputContainer = styled.input`
  height: 25px;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 2px 8px;
  margin: 1px;

  :focus {
    outline: none !important;
    border: 2px solid #0040ff;
    margin: 0;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    margin-left: 5px;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;
