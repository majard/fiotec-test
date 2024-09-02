"use client";

import Filter from "./filter";
import { Row, Col } from "react-bootstrap";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <Row md={2}>
      <Col md={3}>
        <Filter
        />
      </Col>
      <Col md={9}>{children}</Col>
    </Row>
  );
}
