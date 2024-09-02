import { Col } from "react-bootstrap";
import Link from "next/link";
export default function Project({ image, title, description, id, favorited }) {
  return (
    <Link href={`/detalhes-do-projeto/${id}`} className="d-flex h-100 projeto mb-5 ms-5 text-start">
      <Col md={2}>
        <img src={image} alt="Imagem do projeto" width={150} height={42} />
      </Col>
      <Col className="ms-3">
        <strong className="mt-1 mb-2">{title}</strong>
        <p className="description mt-auto mb-3">{description}</p>
      </Col>
    </Link>
  );
}
