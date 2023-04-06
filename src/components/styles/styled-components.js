import styled, { keyframes } from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Button = styled.button`
	color: ${(props) => props.color || `${theme.tertiaryColor}`};
	background-color: ${(props) => props.bcColor || `${theme.primaryColor}`};
	padding: ${(props) => props.padding || "10px 20px"};
	margin: ${(props) => props.margin || "10px 20px"};

	font-size: ${(props) => props.fontSize || "2.2rem"};
	font-weight: ${(props) => props.fontWeight || "bold"};
	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.borderRadius || "8px"};
	width: ${(props) => props.width || "100%"};

	cursor: pointer;

	&:hover {
		color: ${(props) => props.color || `${theme.primaryColor}`};
		background-color: ${(props) => props.bcColor || `${theme.tertiaryColor}`};
	}
`;
export const ReadMoreButton = styled.button`
	background-color: transparent;
	color: ${theme.accentColor};
	margin-left: ${(props) => props.marginLeft || "0"};

	font-size: 1.6rem;
	font-weight: bold;
	padding: 0.5rem 1rem;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		color: ${theme.tertiaryColor};
	}

	&:active {
		transform: translateY(1px);
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
export const Title = styled.h2`
	margin: ${(props) => props.margin || "0 auto"};
	margin-top: ${(props) => props.marginTop || ""};
	padding: ${(props) => props.padding || "0.5rem"};
	font-size: ${(props) => props.fontSize || "2.5em"};
	font-family: ${(props) => props.fontFamily || "Times"}, serif;
	color: ${(props) => props.color || theme.accentColor};
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	color: ${(props) => theme.tertiaryColor};
	width: ${(props) => props.width || "90%"};
	border: ${(props) => props.border || ""};
	position: ${(props) => props.position || "relative"};
	span {
		position: absolute;
		top: -25%;
		left: 6.5%;
		font-size: 1.5em;
		font-weight: bold;
		color: #d3a284;
	}

	@media (max-width: 768px) {
		font-size: 2em;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const Author = styled.h3`
	margin: ${(props) => props.margin || "0 auto"};
	margin-top: ${(props) => props.marginTop || ""};

	padding: ${(props) => props.padding || "0.5rem"};
	font-size: ${(props) => props.fontSize || "1.5em"};
	font-family: ${(props) => props.fontFamily || "Helvetica"}, sans-serif;
	color: ${(props) => props.color || theme.secondaryColor};
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.align || "flex-end"};
	justify-content: ${(props) => props.justify || "flex-end"};
	background-color: ${(props) => props.backgroundColor || "transparent"};
	border: ${(props) => props.border || ""};
	margin-right: ${(props) => props.marginRight || "3rem"};
	position: ${(props) => props.position || "relative"};
	span {
		display: ${(props) => props.display || "flex"};
		flex-direction: ${(props) => props.flexDirection || "column"};
		align-items: ${(props) => props.align || "flex-end"};
		justify-content: ${(props) => props.justify || "flex-end"};
		color: ${(props) => props.color || "black"};

		font-size: 1.2em;
		font-weight: bold;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const TextContainer = styled.blockquote`
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	width: ${(props) => props.width || "90%"};
	margin: ${(props) => props.margin || "3rem auto"};
	padding: ${(props) => props.padding || "0.5rem"};
	font-size: ${(props) => props.fontSize || "2rem"};
	line-height: ${(props) => props.lineHeight || "2rem"};
	font-family: ${(props) => props.fontFamily || "Times"}, serif;
	color: ${(props) => props.color || theme.tertiaryColor};
	flex-direction: column;

	& > p:first-child {
		text-indent: 1em;
	}
	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		line-height: 1.8rem;
	}

	@media screen and (max-width: 576px) {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`;
export const Details = styled.div`
	color: ${(props) => props.color || theme.accentColor};
	position: ${(props) => props.position || "relative"} 
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	margin: ${(props) => props.margin || "1rem auto"};
	margin-top: ${(props) => props.marginTop || ""};
	border: ${(props) => props.border || ""};
	width: ${(props) => props.width || "80%"};
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0;
		border:'none';
		 ${Title} {
  		 	 font-size: 1rem;
			padding: 0;
			padding-top: 0.3rem;
			margin: 0;
			
		  }
	}
`;
export const BoxContainer = styled.div`
	width: ${(props) => props.width || "90%"};
	padding: ${({ padding }) => padding || "1rem"};
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0.5rem;
	}
`;
export const PoemBox = styled.div`
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "column"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	padding-bottom: 2rem;
	line-height: ${(props) => props.lineHeight || "1.5em"};
	border-bottom: ${(props) => props.border || `4px dashed #58727F`};
	font-size: ${(props) => props.fontSize || "2.5rem"};
	font-family: ${(props) => props.fontFamily || "Times"}, serif;
	color: ${(props) => props.color || theme.accentColor};
	margin: ${(props) => props.margin || ""};

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		h2 {
			font-size: 1rem;
		}
		div {
			margin: ${(props) => props.margin || "0rem 2rem"};
			font-size: 1.2rem;
		}
	}

	h2 {
		font-size: 2rem;
	}

	div {
		margin: ${(props) => props.margin || "0rem"};

		display: flex;
		padding: 0;
		font-size: 2rem;
	}
`;

export const Favorites = styled.div`
	position: ${(props) => props.position || "none"} 
	cursor: pointer;
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.align || "center"};
	justify-content: ${(props) => props.justify || "center"};
	margin: ${(props) => props.margin || "1rem auto"};
	font-size: ${(props) => props.fontSize || "2.5em"};

	transition: transform 0.2s ease-in-out;
	>${Title}{
		cursor: pointer;
		&:hover {
			cursor: pointer;
		}
	}
	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		font-size: 1.5em;
	}
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const Added = styled.div`
	position: absolute;
	top: -20%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #000;
	border-radius: 0.5rem;
	/* padding: 0.5rem; */
	animation: ${fadeOut} 2.5s forwards;
	font-size: 1rem;
	&:after {
		content: "${(props) => props.message}";
	}
`;
export const ListBox = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	margin: 4rem;
	width: 100%;

	&:hover::before {
		width: ${(props) => props.hoverWidth || props.width || "160%"};
	}

	h2 {
		position: relative;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}

		&::before {
			content: "";
			position: absolute;
			bottom: -0.5rem;
			left: 0;
			width: 0%;
			height: 6px;
			background-color: #d3a284;
			transition: width 1s ease-in-out;
		}

		&:hover::before {
			width: ${(props) => props.hoverWidth || props.width || "50%"};
		}
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`;
export const Loading = styled.div`
	font-size: ${(props) => props.fontSize || "2.5rem"};
	font-weight: ${(props) => props.fontWeight || "bold"};
	justify-content: ${(props) => props.justify || "space-evenly"};
	text-align: ${(props) => props.textAlign || "center"};
	margin: ${(props) => props.margin || "12rem 0"};
	color: ${(props) => props.color || "#D3A284"};
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		margin: 8rem 0;
	}
`;
export const Line = styled.div`
	margin: 3rem 0;
	position: relative;
	width: 100%;
	height: 20px;
	background-color: #f2f2f2;
	overflow: hidden;

	&:before {
		content: "";
		position: absolute;
		top: 10px;
		left: -100px;
		width: 200px;
		height: 20px;
		background: linear-gradient(90deg, transparent, #58727f, transparent);
		transform: skewX(-15deg);
		animation: birdFly 4s linear infinite;
	}

	@keyframes birdFly {
		0% {
			left: -100px;
		}
		100% {
			left: 100%;
		}
	}

	&:after {
		content: "";
		position: absolute;
		top: 10px;
		right: -100px;
		width: 200px;
		height: 30px;
		background: linear-gradient(90deg, transparent, #83afa6, transparent);
		transform: skewX(15deg);
		animation: birdFly 4s linear infinite 2s;
	}
`;
export const NavbarContainer = styled.div`
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.tertiaryColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	font-size: 2.5rem;
	height: 8rem;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 24px;
		background: linear-gradient(-45deg, #fff 12px, transparent 0%),
			linear-gradient(45deg, #fff 12px, transparent 0%);
		background-size: 24px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: -24px;
		left: 0;
		width: 100%;
		height: 24px;
		background: linear-gradient(-135deg, #fff 12px, transparent 0%),
			linear-gradient(135deg, #fff 12px, transparent 0%);
		background-size: 24px;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-evenly;
		height: auto;

		&::before {
			bottom: auto;
			top: 0;
			height: 12px;
			background: linear-gradient(-45deg, #fff 8px, transparent 0%),
				linear-gradient(45deg, #fff 8px, transparent 0%);
			background-size: 16px;
		}

		&::after {
			bottom: auto;
			top: 100%;
			height: 12px;
			background: linear-gradient(-135deg, #fff 8px, transparent 0%),
				linear-gradient(135deg, #fff 8px, transparent 0%);
			background-size: 16px;
		}
	}
`;
export const NavbarLink = styled(Link)`
	color: ${(props) => props.theme.tertiaryColor};
	background-color: ${(props) => props.theme.primaryColor};
	text-decoration: none;
	padding: 0.6rem 1rem;
	border-radius: 12px;

	&.active {
		background-color: ${(props) => props.theme.tertiaryColor};
		color: ${(props) => props.theme.primaryColor};
	}

	&:hover {
		color: ${(props) => props.theme.primaryColor};
		background-color: ${(props) => props.theme.tertiaryColor};
	}

	@media screen and (max-width: 768px) {
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
		padding: 0.3rem 0.6rem;
	}
`;
export const NavbarList = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;

	@media (max-width: 768px) {
		flex-direction: row;
		align-items: center;
	}
`;

export const NavbarItem = styled.li`
	padding: 1rem;

	@media (max-width: 768px) {
		padding: 0.5rem;
	}
`;
