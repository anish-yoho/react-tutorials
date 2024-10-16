import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: white;
  width: 300px;
  height: 300px;
  &:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 15px;
  text-align: left;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
`;

const ProductPrice = styled.h4`
  font-size: 16px;
  color: #00bfa5;
  font-weight: 700;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

const ActionButton = styled.button`
  font-size: 14px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.add-to-cart {
    background-color: #00bfa5;
    color: white;

    &:hover {
      background-color: #009688;
    }
  }

  &.favorite {
    background-color: white;
    color: #f44336;

    &:hover {
      background-color: #ffe0e0;
    }
  }

  &.share {
    background-color: white;
    color: #2196f3;

    &:hover {
      background-color: #e3f2fd;
    }
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.thumbnail} alt={product.title} />
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
      <ProductActions>
        <ActionButton className="add-to-cart">Add to Cart</ActionButton>
        <ActionButton className="favorite">❤️</ActionButton>
        <ActionButton className="share">🔗</ActionButton>
      </ProductActions>
    </Card>
  );
};

export default ProductCard;
