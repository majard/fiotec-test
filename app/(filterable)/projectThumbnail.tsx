"use client";

import Image from "next/image";
import { Row, Button } from "react-bootstrap";
import { useRouter } from 'next/navigation';

export default function ProjectThumbnail({ image, title, description, id, favorited }) {
  const router = useRouter();
  
  const handleFavorite = async () => {
    const favorite = !favorited;
    let res = await fetch(`http://localhost:3000/projetos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "favorited": favorite,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    router.refresh();
  };

  return (
    <div className="d-flex flex-column h-100 projeto-expandido">
      <img src={image} alt="Imagem do projeto" width={182} height={55} />
      <strong className="mt-1 mb-2">{title}</strong>
      <p className="description overflow-hidden mt-auto mb-3">{description}</p>
      <Row md={2} className="justify-content-evenly">
        <Button
          href={`/detalhes-do-projeto/${id}`}
          className="bg-secondary bg-opacity-25 border-0 d-flex rounded-pill icon"
        >
          <Image
            src="/view_icon.png"
            alt="Icone ver"
            width={16}
            height={16}
            priority
          />
          Acessar
        </Button>
        <Button
          onClick={handleFavorite}
          className="bg-secondary bg-opacity-25 border-0 d-flex rounded-pill icon"
        >
          <Image
            src="/heart_icon.png"
            alt="Icone favoritar"
            width={16}
            height={16}
            priority
            className={favorited ? '' : 'opacity-25'}
          />
          Favoritar
        </Button>
      </Row>
    </div>
  );
}
