import { Container, Col } from "react-bootstrap";
import BookCard from "../bookCard/BookCard";

import "./ProducrGrid.css";

export default function ProductGrid() {
  const products = ["Product 1", "Product 2"];
  return (
    <Container>
      <div className="product-grid">
        {products.map((product, index) => (
          <Col key={index} className="product-col">
            <BookCard />
          </Col>
        ))}
      </div>
    </Container>
  );
}
