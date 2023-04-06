import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
	const [quotes, setQuotes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [randomQuote, setRandomQuote] = useState({});

	useEffect(() => {
		fetchQuotes();
	}, []);

	const fetchQuotes = async () => {
		try {
			const response = await axios.get("https://type.fit/api/quotes");
			setQuotes(response.data);
			const randomIndex = Math.floor(Math.random() * response.data.length);
			setRandomQuote(response.data[randomIndex]);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<QuotesContext.Provider value={{ isLoading, quotes, randomQuote }}>
			{children}
		</QuotesContext.Provider>
	);
};
