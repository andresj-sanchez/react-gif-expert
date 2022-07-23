export const getGifs = async ( category ) => {

	const url = `https://api.giphy.com/v1/gifs/search?api_key=up6Y7QURqJqyJ8KlEc0tymyv2oJdq2wz&limit=10&q=${ category }`;
	const resp = await fetch( url );
	const { data } = await resp.json();

	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}))

	return gifs;
}