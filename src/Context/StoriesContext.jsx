import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
	const [stories, setStories] = useState([]);
	const [selectedStory, setSelectedStory] = useState(null);
	const [randomStory, setRandomStory] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [favorites, setFavorites] = useState([]);
	const [added, setAdded] = useState(false);

	useEffect(() => {
		fetchRandomStory();
	}, []);

	const fetchRandomStory = async () => {
		try {
			const response = await axios.get("https://shortstories-api.onrender.com/");
			setRandomStory(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	const handleSelectedStory = (id) => {
		const story = stories.find((story) => story._id === id);
		setSelectedStory(story);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleClearSelectedStory = () => {
		setSelectedStory(null);
	};

	useEffect(() => {
		const fetchStories = async () => {
			try {
				const response = await axios.get("https://shortstories-api.onrender.com/stories");
				setStories(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStories();
	}, []);

	const handleAddToFavorites = (item, type) => {
		setFavorites([...favorites, { ...item, type, identifier: item._id || item.title }]);
		setAdded("Added");
		setTimeout(() => {
			setAdded(null);
		}, 1000);
	};

	const handleRemoveFromFavorites = (poem) => {
		setFavorites(favorites.filter((fav) => fav !== poem));
	};

	return (
		<StoriesContext.Provider
			value={{
				stories,
				selectedStory,
				handleSelectedStory,
				handleClearSelectedStory,
				isLoading,
				randomStory,
				handleAddToFavorites,
				added,
				favorites,
			}}
		>
			{children}
		</StoriesContext.Provider>
	);
};
