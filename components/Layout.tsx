import * as React from 'react';
// import Link from "next/link";
import Head from 'next/head';

import styled from 'styled-components';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

type Props = {
  title?: string;
};

const CustomNavLink = styled(NavLink)`
  font-size: 12px;
  color: #232630 !important;
  font-weight: 400;
  padding-left: 20px;
`;

const RightNavBar = styled(Nav)`
  margin-right: 0 !important;
`;

const PurpleButton = styled.button`
  background-color: #246df8 !important;
  font-size: 12px;
  padding: 10px 20px;
  border-radius: 3px;
  border: none;
  color: white;
`;

const CustomNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/css/responsive.css" rel="stylesheet" />
      </Head>
      <style jsx>{`
        * {
          font-size: 1vw;
          font-family: 'Poppins', sans-serif;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      <header>
        <div>
          <Navbar color="light" light expand="md">
            <Container>
              <NavbarBrand href="/">
                <img src="/static/logo/logo.svg" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <CustomNavItem>
                    <CustomNavLink href="/components/">Browse</CustomNavLink>
                  </CustomNavItem>
                  <CustomNavItem>
                    <CustomNavLink href="/components/">Find Jobs</CustomNavLink>
                  </CustomNavItem>
                </Nav>
                <RightNavBar navbar>
                  <CustomNavItem>
                    <CustomNavLink href="/components/">Log In</CustomNavLink>
                  </CustomNavItem>
                  <CustomNavItem>
                    <CustomNavLink href="/components/">Sign Up</CustomNavLink>
                  </CustomNavItem>
                  <PurpleButton>Post a Project</PurpleButton>
                </RightNavBar>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        {/* <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>Users List</a>
          </Link>{" "}
          | <a href="/api/users">Users API</a>
        </nav> */}
      </header>
      {children}
    </div>
  );
};

export default Layout;
