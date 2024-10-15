import React from "react";
import styled from "styled-components";
import ProductCard from "../components/product-card/index";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Stylish Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: "99.99",
    imageUrl: "https://via.placeholder.com/350x200",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and receive notifications.",
    price: "199.99",
    imageUrl: "https://via.placeholder.com/350x200",
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Track your fitness and receive notifications.",
    price: "199.99",
    imageUrl: "https://via.placeholder.com/350x200",
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track your fitness and receive notifications.",
    price: "199.99",
    imageUrl: "https://via.placeholder.com/350x200",
  },
  // Add more products here
];

// Styled components for the layout
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  background-color: #00bfa5;
  color: white;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 0.5fr));
  gap: 1px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  margin-top: 30px;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #666;
`;

// ProductListPage component
const ProductListPage = () => {
  return (
    <Container>
      <Header>Product Store</Header>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <Footer>© 2024 My Product Store. All rights reserved.</Footer>
    </Container>
  );
};

export default ProductListPage;
