import { Navbar } from "flowbite-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <React.Fragment>
            <Navbar className="shadow-lg py-4" fluid rounded>
                <Navbar.Brand as={Link} href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Agnos</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </React.Fragment>
    );
}

export default Navigation;