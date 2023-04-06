import React, { useState, useContext } from "react";
import {
	Title,
	TextContainer,
	Details,
	Loading,
	Author,
	ReadMoreButton,
	BoxContainer,
} from "../../components/styles/styled-components.js";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../components/styles/theme.js";
import { ReadMoreContext } from "../../Context/ReadMoreContext";
import { StoriesContext } from "../../Context/StoriesContext";

const RandomStory = () => {
	const { showFullText, toggleFullText } = useContext(ReadMoreContext) || {};
	const { randomStory, isLoading } = useContext(StoriesContext) || {};

	return (
		<BoxContainer>
			{isLoading ? (
				<Loading>Loading</Loading>
			) : (
				<Details margin={"3rem"}>
					<Title>{randomStory.title}</Title>
					<TextContainer>
						{showFullText ? randomStory.story : `${randomStory.story.slice(0, 100)}...`}
					</TextContainer>
					{randomStory.story.length > 100 && (
						<ReadMoreButton
							marginLeft={"3rem"}
							onClick={toggleFullText}
						>
							{showFullText ? "Read less" : "Read more"}
						</ReadMoreButton>
					)}
					<Author>
						<span> Morale: </span>
						{showFullText && randomStory.moral}
					</Author>
				</Details>
			)}
		</BoxContainer>
	);
};

export default RandomStory;
