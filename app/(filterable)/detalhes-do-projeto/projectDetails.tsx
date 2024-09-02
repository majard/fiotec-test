import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";

export default function ProjectDetails({ image, title, description, id }) {
  return (
    <Col className="detalhe-projeto text-start px-5 py-4">
      
      <strong>{title}</strong>
      <img src={image} alt="Imagem do projeto" width={182} height={55} />
      <p className="mt-3 description-detail">{description}</p>
      
    </Col>
  );
}
