import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PoemsContext = createContext();

export const PoemsProvider = ({ children }) => {
	const [authors, setAuthors] = useState([]);
	const [selectedAuthor, setSelectedAuthor] = useState("");
	const [poems, setPoems] = useState([]);
	const [showFavorites, setShowFavorites] = useState(false);
	const [randomPoem, setRandomPoem] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [favorites, setFavorites] = useState([]);
	const [added, setAdded] = useState(false);

	useEffect(() => {
		fetchAuthors();
	}, []);

	useEffect(() => {
		fetchPoems();
	}, []);

	const fetchAuthors = async () => {
		try {
			const response = await axios.get("https://poetrydb.org/author");
			setAuthors(response.data.authors);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchRandomPoem = async (author) => {
		try {
			const response = await axios.get(`https://poetrydb.org/author/${author}/random`);
			return response.data[0];
		} catch (error) {
			console.log(error);
		}
	};
	const fetchPoems = async () => {
		try {
			const response = await axios.get("https://poetrydb.org/random");
			setRandomPoem(response.data[0]);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	const handleAuthorClick = async (author) => {
		try {
			const response = await axios.get(`https://poetrydb.org/author/${author}/title,lines`);
			setPoems(response.data);
			setSelectedAuthor(author);
			setIsLoading(false);
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (error) {
			console.log(error);
		}
	};

	const handleBackClick = () => {
		setSelectedAuthor("");
		setPoems([]);
	};

	const handleAddToFavorites = (poem) => {
		setFavorites([...favorites, poem]);
		console.log("added");
		setAdded("Added");
		setTimeout(() => {
			setAdded(null);
		}, 1000);
	};

	const handleRemoveFromFavorites = (poem) => {
		setFavorites(favorites.filter((fav) => fav !== poem));
	};

	const clearFavorites = () => {
		setFavorites([]);
	};

	const toggleFavorites = () => {
		setShowFavorites(!showFavorites);
	};

	return (
		<PoemsContext.Provider
			value={{
				authors,
				selectedAuthor,
				fetchRandomPoem,
				poems,
				favorites,
				showFavorites,
				fetchAuthors,
				handleAuthorClick,
				handleBackClick,
				handleAddToFavorites,
				handleRemoveFromFavorites,
				clearFavorites,
				toggleFavorites,
				isLoading,
				randomPoem,
				added,
			}}
		>
			{children}
		</PoemsContext.Provider>
	);
};
