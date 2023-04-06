import React from "react";
import RandomPoem from "./homePageElements/RandomPoem";
import RandomQuote from "./homePageElements/RandomQuote";
import RandomStory from "./homePageElements/RandomStory";
import styled from "styled-components";
import ReadMoreProvider from "../Context/ReadMoreContext";
import { PoemsProvider } from "../Context/PoemsContext";
import { StoriesProvider } from "../Context/StoriesContext";
import { QuotesProvider } from "../Context/QuotesContext";
import { Line } from "../components/styles/styled-components.js";
const HomePage = ({ postList, handleSavePost }) => {
	return (
		<Container>
			<QuotesProvider>
				<RandomQuote />
			</QuotesProvider>
			<Line></Line>

			<ReadMoreProvider>
				<StoriesProvider>
					<RandomStory />
				</StoriesProvider>
			</ReadMoreProvider>

			<Line></Line>

			<ReadMoreProvider>
				<PoemsProvider>
					<RandomPoem />
				</PoemsProvider>
			</ReadMoreProvider>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 3rem;
	column-gap: 3rem;
`;

export default HomePage;
