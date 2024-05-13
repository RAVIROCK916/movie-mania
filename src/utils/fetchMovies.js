const axios = require("axios");

const fetchMovies = async (url) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
	const options = {
		method: "GET",
		url,
		params: {
			api_key,  
		},
  };

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default fetchMovies;
