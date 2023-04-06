import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
	TextContainer,
	Title,
	Details,
	Button,
	Favorites,
} from "../components/styles/styled-components.js";
import { FavoritesContext } from "../Context/FavoritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteIcon from "./FavoriteIcon";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const FavoriteList = () => {
	const {
		toggleFavorites,
		clearFavorites,
		handleRemoveFromFavorites,
		handleAddToFavorites,
		favorites,
	} = useContext(FavoritesContext) || {};

	const [selectedFavorite, setSelectedFavorite] = useState(null);

	const handleTitleClick = (favorite) => {
		if (selectedFavorite && selectedFavorite._id === favorite._id) {
			// unselect the favorite if it's already selected
			setSelectedFavorite(null);
		} else {
			// select the clicked favorite
			setSelectedFavorite(favorite);
		}
	};

	return (
		<div>
			<Title marginTop={"2rem"}>Favorites List</Title>
			<Button onClick={clearFavorites}>Clear all</Button>
			<ul>
				{favorites.map((favorite) => (
					<li key={uuidv4()}>
						<Details border={"2px solid grey"}>
							<Title onClick={() => handleTitleClick(favorite)}>{favorite.title}</Title>
							<Favorites>
								<FavoriteIcon favorite={favorite} />
							</Favorites>
						</Details>
						{selectedFavorite && selectedFavorite._id === favorite._id && (
							<>
								{favorite.type === "poem" ? (
									<TextContainer>{favorite.lines.join("\n")}</TextContainer>
								) : (
									<TextContainer>{favorite.story}</TextContainer>
								)}
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FavoriteList;
