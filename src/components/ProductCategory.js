import styled from "styled-components";

export default function ProductCategory(props) {
  const { category } = props;
  return <ProductCategoryContainer>{category}</ProductCategoryContainer>;
}

const ProductCategoryContainer = styled.div`
  background-color: #4171fe;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;
