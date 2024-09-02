"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Container, Nav, NavItem } from "react-bootstrap";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (eventKey) => {
    const params = new URLSearchParams(searchParams);
    if (eventKey) {
      params.set("categoryId", eventKey);
    } else {
      params.delete("categoryId");
    }
    replace(`/home?${params.toString()}`);
  };

  return (
    <Nav
      activeKey={searchParams.get('categoryId')?.toString()}
      onSelect={handleSelect}
      className="filter-nav flex-column ms-5 shadow-sm bg-secondary bg-opacity-10"
    >
      <p className="ps-3">
        <strong>Filtrar por categoria</strong>
      </p>
      <NavItem>
        <Nav.Link eventKey="">Todos</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="1">Ensino</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="2">Pesquisa</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="3">Estímulo a inovação</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="4">Extensão</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="5">Desenvolvimento institucional</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link eventKey="6">
          Desenvolvimento Científico e tecnológico
        </Nav.Link>
      </NavItem>
    </Nav>
  );
}
