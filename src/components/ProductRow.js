import { useState } from "react";
import styled from "styled-components";

export default function ProductRow(props) {
  const { name, price, stocked } = props.product;
  const [shine, setShine] = useState(false);

  return (
    <ProductRowContainer
      stocked={stocked}
      shine={shine}
      onClick={() => setShine(!shine)}
    >
      <button>Delete</button>
      <p>{name}</p>
      <p>{price}</p>
    </ProductRowContainer>
  );
}

const ProductRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgray;
  padding: 10px;
  margin: 10px;
  font-weight: 700;
  cursor: pointer;

  color: ${({ stocked }) => (stocked ? "black" : "red")};
  background-color: ${({ stocked }) => (stocked ? "#ccc" : "#ffcccc")};

  transform: ${({ shine }) => (shine ? "scale(1.1)" : "")};

  button {
    display: none;
  }

  :hover button {
    display: block;
  }
`;
