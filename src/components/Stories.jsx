import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StoriesContext } from "../Context/StoriesContext";
import { FavoritesContext } from "../Context/FavoritesContext";
import styled from "styled-components";
import {
	PoemBox,
	ListBox,
	Title,
	BoxContainer,
	Details,
	Button,
	Favorites,
	Added,
	Loading,
	TextContainer,
} from "../components/styles/styled-components.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "./FavoriteIcon";

const Stories = () => {
	const { isLoading, stories, selectedStory, handleSelectedStory, handleClearSelectedStory } =
		useContext(StoriesContext) || {};

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
			) : selectedStory ? (
				<PoemBox margin={"2rem 5rem"}>
					<TextContainer>{selectedStory.title}</TextContainer>
					<TextContainer>{selectedStory.story}</TextContainer>
					<Title
						width={"100%"}
						margin={"1rem auto"}
						padding={"1rem"}
					>
						<span>Morale:</span> {selectedStory.moral}
					</Title>{" "}
					<Button
						onClick={handleClearSelectedStory}
						className="button"
					>
						back
					</Button>
				</PoemBox>
			) : (
				<Details margin={"2rem auto"}>
					<Title>Short Stories by Aesop </Title>

					<ListBox
						hoverWidth={"110%"}
						color={"#000"}
					>
						{stories.map((story) => (
							<Detail key={story._id}>
								<Title
									fontSize={"1.5rem"}
									width={"100%"}
									justify={"none"}
									hoverWidth={"0%"}
									onClick={() => handleSelectedStory(story._id)}
								>
									{story.title}
								</Title>
								<Favorites>
									<FavoriteIcon favorite={story} />
								</Favorites>
							</Detail>
						))}
					</ListBox>
				</Details>
			)}
		</div>
	);
};
const Detail = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border: 2px solid #d3a284;
	margin: 1rem 0;

	& > ${Title} {
		margin-right: auto;
		margin-left: 1rem;
	}

	& > ${Favorites} {
		margin-left: auto;
		margin-right: 1rem;
	}
`;

export default Stories;
