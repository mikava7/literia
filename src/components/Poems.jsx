import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { PoemsContext } from "../Context/PoemsContext";
import { FavoritesContext } from "../Context/FavoritesContext";
import {
	Title,
	Details,
	Button,
	TextContainer,
	PoemBox,
	Favorites,
	Added,
	ListBox,
	Loading,
} from "./styles/styled-components.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "./FavoriteIcon";
import { v4 as uuidv4 } from "uuid";

function Poems() {
	const {
		authors,
		selectedAuthor,
		poems,
		showFavorites,
		fetchAuthors,
		handleAuthorClick,
		handleBackClick,
		isLoading,
	} = useContext(PoemsContext);

	const {
		toggleFavorites,
		clearFavorites,
		handleRemoveFromFavorites,
		handleAddToFavorites,
		favorites,
		added,
	} = useContext(FavoritesContext);

	return (
		<div>
			{isLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Details>
						<Title maxWidth={"0%"}>Choose Author</Title>
					</Details>

					<div>
						{selectedAuthor ? (
							<div>
								<Details>
									<Button onClick={handleBackClick}> Go Back </Button>
								</Details>
								{poems.map((poem) => (
									<div key={uuidv4()}>
										<Details>
											<Title fontSize={"1.8rem"}>{poem.title}</Title>
											<Favorites>
												<FavoriteIcon favorite={poem} />
											</Favorites>
										</Details>

										<PoemBox>
											{poem.lines.map((sentence) => (
												<div key={uuidv4()}>{sentence}</div>
											))}
										</PoemBox>
									</div>
								))}
							</div>
						) : (
							<ListBox>
								{authors.map((author) => (
									<h2
										key={author}
										onClick={() => handleAuthorClick(author)}
									>
										{author}
									</h2>
								))}
							</ListBox>
						)}
					</div>
				</>
			)}
		</div>
	);
}

const Sentence = styled.div`
	font-size: 3rem;
`;

export default Poems;
