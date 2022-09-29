import styled from "styled-components";

export default function ProductRow(props) {
  const { name, price, stocked } = props.product;
  return (
    <ProductRowContainer stocked={stocked}>
      <p>{name}</p>
      <p>{price}</p>
    </ProductRowContainer>
  );
}

/* {`product-row ${!stocked ? "not-in-stock" : ""}`} */

const ProductRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgray;
  padding: 10px;
  margin: 10px;
  font-weight: 700;

  color: ${({ stocked }) => (stocked ? "black" : "red")};
  background-color: ${({ stocked }) => (stocked ? "#ccc" : "#ffcccc")};
`;
