import { Row, Col } from "react-bootstrap";

import ProjectThumbnail from "../projectThumbnail";

export default async function HighlightedProjects({
  searchParams,
}: {
  searchParams?: {
    categoryId?: string;
  };
}) {
  const categoryId = searchParams?.categoryId || "";
  
  let data = await fetch(
    `http://localhost:3000/projetos${
      categoryId ? `?categoryId=${categoryId}` : ""
    }`,
    { cache: "no-store" }
  );
  let projects = await data.json();

  return (
    <>
      <strong className="p-4">Projetos em destaque</strong>
      <Row md={3}>
        {projects.map(({ title, description, image, id, favorited }) => (
          <Col key={`Projeto ${id}`} className="projeto p-5">
            <ProjectThumbnail
              title={title}
              description={description}
              image={image}
              id={id}
              favorited={favorited}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
