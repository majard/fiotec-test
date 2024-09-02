import { Row, Col } from "react-bootstrap";

import ProjectDetails from "../projectDetails";
export default async function Detail({ params }: { params: { id: string } }) {

  let data = await fetch(`http://localhost:3000/projetos/${params.id}`);
  let project = await data.json();

  const { id, title, description, image } = project;

  return (
    <>
      <strong className="p-4 ms-4">Projetos em destaque</strong>

      <ProjectDetails
        key={`Projeto ${id}`}
        title={title}
        description={description}
        image={image}
        id={id}
      />
    </>
  );
}
