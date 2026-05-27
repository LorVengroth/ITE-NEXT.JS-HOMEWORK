
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="flex justify-center items-center">
      <NavbarCollapse>
         <Link href="/">Home</Link>
        <Link href="../../homework">Homework1</Link>
        <Link href="../../product">Homework2</Link>
        <Link href="../../login">Login</Link>
        <Link href="../../register">Register</Link>
        <Link href="../../dashboard">Homework3</Link>
        <Link href="../../greeting">API Route</Link>

      </NavbarCollapse>
    </Navbar>
  );
}
