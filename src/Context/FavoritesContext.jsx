import { useState, useEffect, createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState(() => {
		const storedFavorites = localStorage.getItem("favorites");
		return storedFavorites ? JSON.parse(storedFavorites) : [];
	});
	const [added, setAdded] = useState(false);
	const [showFavorites, setShowFavorites] = useState(false);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const handleAddToFavorites = (item) => {
		if (!favorites.some((fav) => fav.title === item.title)) {
			const updatedItem = { ...item, type: item.lines ? "poem" : "story" };
			setFavorites([...favorites, updatedItem]);
			setAdded("Added");
			setTimeout(() => {
				setAdded("");
			}, 1000);
		}
	};

	const handleRemoveFromFavorites = (poem) => {
		setFavorites(favorites.filter((fav) => fav !== poem));
	};

	const clearFavorites = () => {
		setFavorites([]);
	};

	const toggleFavorites = () => {
		setShowFavorites(!showFavorites);
		console.log("changed");
	};
	const handleFavoriteClick = async (favorite, setFullText) => {
		try {
			if (favorite.type === "poem") {
				const response = await axios.get(`https://poetrydb.org/title/${favorite.identifier}/lines`);
				setFullText(response.data[0].lines.join("\n"));
			} else if (favorite.type === "story") {
				const response = await axios.get(
					`https://shortstories-api.onrender.com/stories/${favorite.identifier}`,
				);
				setFullText(response.data.text);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<FavoritesContext.Provider
			value={{
				toggleFavorites,
				clearFavorites,
				handleRemoveFromFavorites,
				handleAddToFavorites,
				favorites,
				added,
				showFavorites,
			}}
		>
			{children}
		</FavoritesContext.Provider>
	);
};
