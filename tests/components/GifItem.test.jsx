import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

	const title = 'One Punch Man GIF';
	const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=ccfc8180dbuw2mst0bld3k6n1dqu9los0lbbu4nnh9b83hmn&rid=giphy.gif&ct=g';
	
	test('debe de hacer match con el snapshot', () => {
		const { container } = render( <GifItem title={ title } url={ url } /> );
		expect( container ).toMatchSnapshot();
	});

	test('debe de mostrar la imagen con el URL y el ALT', () => {
		render( <GifItem title={ title } url={ url } /> );
		// screen.debug();
		// expect( screen.getByRole('img').src ).toBe( url );
		const { src, alt } = screen.getByRole('img');
		expect( src ).toBe( url );
		expect( alt ).toBe( title );
	});

	test('debe de mostrar el titulo en el componente', () => {
		
		render( <GifItem title={ title } url={ url } /> );
		expect( screen.getByText( title ) ).toBeTruthy();

	});
	
});