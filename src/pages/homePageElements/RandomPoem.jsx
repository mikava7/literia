import React, { useContext } from "react";
import axios from "axios";
import {
	Title,
	TextContainer,
	Details,
	ReadMoreButton,
	Loading,
	Author,
} from "../../components/styles/styled-components.js";
import styled, { ThemeProvider } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ReadMoreContext } from "../../Context/ReadMoreContext";
import { PoemsContext } from "../../Context/PoemsContext";
import { BoxContainer } from "../../components/styles/styled-components.js";

const PoemContainer = styled(BoxContainer)`
	&:hover {
		transform: scale(1.05);
	}

	&.expanded {
		transform: scale(1);
	}
`;

const RandomPoem = () => {
	const { showFullText, toggleFullText } = useContext(ReadMoreContext) || {};
	const { randomPoem, isLoading } = useContext(PoemsContext) || {};

	return (
		<PoemContainer className={showFullText ? "expanded" : ""}>
			{isLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<Details>
					<div>
						<Title
							width={"90%"}
							fontSize={"2rem"}
						>
							{randomPoem && randomPoem.title}
						</Title>
						<TextContainer
							fontSize={"1.5rem"}
							flexDirection={"column"}
						>
							{showFullText ? (
								randomPoem && randomPoem.lines.map((line) => <p key={uuidv4()}>{line}</p>)
							) : (
								<p>{randomPoem && randomPoem.lines.join(" ").slice(0, 100) + "..."}</p>
							)}
						</TextContainer>

						<Author>by {randomPoem && randomPoem.author}</Author>
						<ReadMoreButton onClick={toggleFullText}>
							{showFullText ? "Read less" : "Read more"}
						</ReadMoreButton>
					</div>
				</Details>
			)}
		</PoemContainer>
	);
};

export default RandomPoem;
