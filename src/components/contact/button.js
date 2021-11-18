import { Container, Col } from "react-bootstrap";


export default function Button({onClick, valor}) {
  return (
    <Container>
      <Col xl={2} lg={2} sm={8} className="p-0">
        <button type="submit" onClick={onClick}  className="my-button">{valor}</button>
      </Col>
    </Container>
  );
}