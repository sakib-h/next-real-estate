import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Key":
				"9e474d45d4msh5c2674c523eda3cp16ae7fjsn5c909f551659",
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
		},
	});

	return data;
};
