
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
         <Link href="/">Home</Link>
        <Link href="../../homework">Homework1</Link>
        <Link href="../../product">Homework2</Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
      </NavbarCollapse>
    </Navbar>
  );
}
