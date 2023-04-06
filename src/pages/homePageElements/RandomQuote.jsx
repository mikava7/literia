import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
	Title,
	TextContainer,
	BoxContainer,
	Loading,
	Author,
} from "../../components/styles/styled-components.js";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../components/styles/theme.js";
import { QuotesContext } from "../../Context/QuotesContext";
const RandomQuote = () => {
	const { isLoading, randomQuote } = useContext(QuotesContext);

	return (
		<BoxContainer>
			{isLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<div>
					<TextContainer>"{randomQuote.text} "</TextContainer>
					<Author>{randomQuote.author}</Author>
				</div>
			)}
		</BoxContainer>
	);
};

export default RandomQuote;
