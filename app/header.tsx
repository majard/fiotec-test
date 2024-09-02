"use client";

import Image from "next/image";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { usePathname } from 'next/navigation';


export default function Header() {
const currentRoute = usePathname();
  return (
    <Navbar className="border-bottom border-0 shadow-sm py-4 mb-4">
      <Container className="justify-content-between">
        <NavbarBrand className="me-5" href="#home">
          <Image
            src="/logo.png"
            alt="Fiotec logo"
            width={182}
            height={55}
            priority
          />
        </NavbarBrand>

        <Nav className="ms-5 me-auto" activeKey={currentRoute}>
          <NavLink href="/home">
            <strong>Home</strong>
          </NavLink>
          <NavLink href="/projetos-em-destaque">
            <strong>Projetos em destaque</strong>
          </NavLink>
          <NavLink href="/meus-favoritos">
            <strong>Meus favoritos</strong>
          </NavLink>
        </Nav>
        <div className="rounded-circle bg-secondary bg-opacity-25 p-2">
          <Image
            className="m-1"
            src="/user_icon.png"
            alt="User icon"
            width={23}
            height={23}
            priority
          />
        </div>
      </Container>
    </Navbar>
  );
}
