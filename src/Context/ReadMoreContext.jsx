// ReadMoreContext.js

import React, { createContext, useState } from "react";

// create a new context
export const ReadMoreContext = createContext();

// create a provider for the context
const ReadMoreProvider = ({ children }) => {
	// initialize state for the context
	const [showFullText, setShowFullText] = useState(false);

	// define a function to toggle the state
	const toggleFullText = () => {
		setShowFullText(!showFullText);
	};

	// return the provider with the state and the function as its value
	return (
		<ReadMoreContext.Provider value={{ showFullText, toggleFullText }}>
			{children}
		</ReadMoreContext.Provider>
	);
};

export default ReadMoreProvider;
