import Project from "../project";
import { Row } from "react-bootstrap";
export default async function FavoriteProjects() {
  let data = await fetch(`http://localhost:3000/projetos?favorited=true`, {
    cache: "no-store",
  });
  let projects = await data.json();

  return (
    <>
      <p className="ms-5 my-4 py-2"><strong>Meus favoritos</strong></p>

      {projects.map(({ title, description, image, id, favorited }) => (
        <Row key={`Projeto ${id}`}>
          <Project
            title={title}
            description={description}
            image={image}
            id={id}
            favorited={favorited}
          />
        </Row>
      ))}
    </>
  );
}
