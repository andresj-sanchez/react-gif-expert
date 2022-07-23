import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

	const title = 'One Punch Man GIF';
	const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=ccfc8180dbuw2mst0bld3k6n1dqu9los0lbbu4nnh9b83hmn&rid=giphy.gif&ct=g';
	
	test('debe de hacer match con el snapshot', () => {
		const { container } = render( <GifItem title={ title } url={ url } /> );
		expect( container ).toMatchSnapshot();
	});
});