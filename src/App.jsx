import React, { useState } from "react";
import FavoriteList from "./components/FavoriteList";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Poems from "./components/Poems";
import Stories from "./components/Stories";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PoemsProvider } from "./Context/PoemsContext";
import { StoriesProvider } from "./Context/StoriesContext";
import { QuotesProvider } from "./Context/QuotesContext";
import { FavoritesProvider } from "./Context/FavoritesContext";
import RandomPoem from "./pages/homePageElements/RandomPoem";
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>

					<Route
						path="/favorite-list"
						element={
							<FavoritesProvider>
								<FavoriteList />
							</FavoritesProvider>
						}
					/>

					{/* <Route
	path="/random-poem"
	element={<RandomPoem />}
/> */}
					<Route
						path="/quotes"
						element={
							<FavoritesProvider>
								<QuotesProvider>
									<Quotes />
								</QuotesProvider>
							</FavoritesProvider>
						}
					/>

					<Route
						path="/stories"
						element={
							<FavoritesProvider>
								<StoriesProvider>
									<Stories />
								</StoriesProvider>
							</FavoritesProvider>
						}
					/>
					<Route
						path="/poems"
						element={
							<FavoritesProvider>
								<PoemsProvider>
									<Poems />
								</PoemsProvider>
							</FavoritesProvider>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

// import React from "react";
// import styled from "styled-components";

// const AppContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	height: 100vh;
// 	background-color: ${(props) => props.theme.backgroundColor};
// `;

// const Title = styled.h1`
// 	font-size: 36px;
// 	color: ${(props) => props.theme.primaryColor};
// `;

// const Button = styled.button`
// 	background-color: ${(props) => props.theme.primaryColor};
// 	color: ${(props) => props.theme.secondaryColor};
// 	border: none;
// 	border-radius: 4px;
// 	padding: 10px 20px;
// 	font-size: 16px;
// 	cursor: pointer;
// `;

// const Text = styled.p`
// 	font-size: 16px;
// 	line-height: 1.5;
// 	color: ${(props) => props.theme.textColor};
// `;

// const Poem = styled.div`
// 	margin-top: 20px;
// 	font-style: italic;
// 	color: ${(props) => props.theme.poemColor};
// `;

// const Story = styled.div`
// 	margin-top: 20px;
// 	font-weight: bold;
// 	color: ${(props) => props.theme.storyColor};
// `;

// const theme = {
// 	primaryColor: "#867070",
// 	secondaryColor: "#E4D0D0",
// 	backgroundColor: "#F5EBEB",
// 	textColor: "#D5B4B4",
// 	poemColor: "#4c4c4c",
// 	storyColor: "#fff",
// };

// function App() {
// 	return (
// 		<AppContainer theme={theme}>
// 			<Title>Literia</Title>
// 			<Button>Read Poems</Button>
// 			<Text>
// 				Welcome to Literia, where you can read poems, quotes, and stories by different authors.
// 			</Text>
// 			<Poem>
// 				<p>My mistress' eyes are nothing like the sun;</p>
// 				<p>Coral is far more red than her lips' red;</p>
// 				<p>If snow be white, why then her breasts are dun;</p>
// 				<p>If hairs be wires, black wires grow on her head.</p>
// 				<p>— William Shakespeare</p>
// 			</Poem>
// 			<Story>
// 				<p>A fox was boasting to a cat of its cleverness:</p>
// 				<p>
// 					"I have a whole bag of tricks," he said, "which contains a hundred ways of escaping my
// 					enemies."
// 				</p>
// 				<p>"I have only one," said the cat. "But I can generally manage with that."</p>
// 				<p>
// 					Just at that moment they heard the cry of a pack of hounds coming towards them, and the
// 					cat immediately scampered up a tree and hid herself in the branches.
// 				</p>
// 				<p>"This is my plan," said the cat. "What are you going to do?"</p>
// 				<p>
// 					The fox thought first of one way, then of another, and while he was debating the hounds
// 					came nearer and nearer, and at last the fox in his confusion was caught up by the hounds
// 					and soon killed by the huntsmen.
// 				</p>
// 				<p>Moral of the story: Better one safe way than a hundred on which you cannot reckon.</p>
// 				<p>— Aesop's Fables</p>
// 			</Story>
// 		</AppContainer>
// 	);
// }

// export default App;
