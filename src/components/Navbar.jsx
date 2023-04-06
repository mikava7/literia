import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/styles/theme.js";
import { NavbarContainer, NavbarLink, NavbarList, NavbarItem } from "./styles/styled-components.js";

const Navbar = () => {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(location.pathname);

	const handleLinkClick = (url) => {
		setActiveLink(url);
	};

	return (
		<ThemeProvider theme={theme}>
			<NavbarContainer>
				<NavbarList>
					<NavbarItem>
						<NavbarLink
							to="/"
							className={activeLink === "/" ? "active" : ""}
							onClick={() => handleLinkClick("/")}
						>
							Home
						</NavbarLink>
					</NavbarItem>

					<NavbarItem>
						<NavbarLink
							to="/quotes"
							className={activeLink === "/authors" ? "active" : ""}
							onClick={() => handleLinkClick("/authors")}
						>
							Quotes
						</NavbarLink>
					</NavbarItem>

					<NavbarItem>
						<NavbarLink
							to="/poems"
							className={activeLink === "/poems" ? "active" : ""}
							onClick={() => handleLinkClick("/poems")}
						>
							Poems
						</NavbarLink>
					</NavbarItem>

					<NavbarItem>
						<NavbarLink
							to="/stories"
							className={activeLink === "/stories" ? "active" : ""}
							onClick={() => handleLinkClick("/stories")}
						>
							Stories
						</NavbarLink>
					</NavbarItem>

					<NavbarItem>
						<NavbarLink
							to="/favorite-list"
							className={activeLink === "/posts" ? "active" : ""}
							onClick={() => handleLinkClick("/favorite-list")}
						>
							Favorites
						</NavbarLink>
					</NavbarItem>
				</NavbarList>
			</NavbarContainer>
		</ThemeProvider>
	);
};

export default Navbar;
