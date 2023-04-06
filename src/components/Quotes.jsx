import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import {
	Title,
	Details,
	Button,
	Favorites,
	Added,
	ListBox,
	Loading,
	Author,
} from "./styles/styled-components.js";
import FavoriteIcon from "./FavoriteIcon";
import { FavoritesContext } from "../Context/FavoritesContext";
import { QuotesContext } from "../Context/QuotesContext";
const Quotes = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 878, min: 564 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 564, min: 0 },
			items: 1,
		},
	};
	const {
		toggleFavorites,
		clearFavorites,
		handleRemoveFromFavorites,
		handleAddToFavorites,
		favorites,
		added,
	} = useContext(FavoritesContext);
	const { isLoading, quotes } = useContext(QuotesContext) || {};

	return isLoading ? (
		<Loading>Loading...</Loading>
	) : (
		<StyledCarousel
			infinite={true}
			responsive={responsive}
			showDots={true}
			swipeable={true}
		>
			{quotes.map((quote) => (
				<div key={uuidv4()}>
					<Details>
						<Title
							width={"90%"}
							marginTop={"10rem"}
						>
							{quote.text}
						</Title>
						<Author marginRight={"3rem"}>{quote.author}</Author>
					</Details>
				</div>
			))}
		</StyledCarousel>
	);
};

const StyledCarousel = styled(Carousel)`
	margin: 0 3rem;
	padding: 2rem;
	font-style: italic;
	color: #333;
	height: 85vh;

	.react-multi-carousel-dot button {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin: 1rem;
		opacity: 0.5;
	}

	.react-multi-carousel-dot--active button {
		opacity: 1;
	}

	div {
		margin: 0 3rem;
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
	}

	@media screen and (max-width: 768px) {
		height: 70vh;
		margin-top: 3rem;
		font-size: 1rem;

		.react-multi-carousel-dot button {
			width: 15px;
			height: 15px;
			margin: 0.5rem;
		}
		.react-multiple-carousel__arrow {
			font-size: 12px;
		}
	}

	div {
		margin: 0;
		width: 100%;
		align-items: center;
	}
`;

export default Quotes;
