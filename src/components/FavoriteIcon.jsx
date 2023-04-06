import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../Context/FavoritesContext";
import { Added } from "./styles/styled-components";

const FavoriteIcon = ({ favorite }) => {
	const { handleAddToFavorites, handleRemoveFromFavorites, favorites, added } =
		useContext(FavoritesContext) || {};

	const isFavorite = favorites.some((fav) => fav.title === favorite.title);

	const handleClick = () => {
		isFavorite ? handleRemoveFromFavorites(favorite) : handleAddToFavorites(favorite);
	};

	return (
		<div
			className="favorite-icon"
			onClick={handleClick}
		>
			{/* displays a star icon in either a grey or brown color depending on whether the story is in the user's favorites */}
			<FontAwesomeIcon
				icon={faStar}
				color={isFavorite ? "#D3A284" : "#83AFA6"}
			/>
			{/* displays a message indicating that the story was added to favorites if the user just added it */}
			<Added>{added && isFavorite && <span className="added">{added}</span>}</Added>
		</div>
	);
};

export default FavoriteIcon;
