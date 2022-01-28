import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;
		background-color: #191816;
		color: #afb6c2;
	}

	*, input, button {
		border: 0;
		outline: 0;
		font-family: "Poppins", sans-serif;
	}
	button {
		cursor: pointer;
	}
	
	a {
		text-decoration: none;
	}

	
`;
