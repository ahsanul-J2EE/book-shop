import { Card } from "react-bootstrap";
import "./CardStyles.css";
export default function BookCard() {
  return (
    <Card className="card-wrapper">
      <Card.Body>
        <Card.Title className="card-title">Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted card-subtitle">
          Card Subtitle
        </Card.Subtitle>
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content. Some quick example text to build on the card
          title and make up the bulk of the content. Some quick example text to
        </Card.Text>
        <Card.Link href="#" className="card-link">
          Card Link
        </Card.Link>
        <Card.Link href="#" className="card-link">
          Another Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
