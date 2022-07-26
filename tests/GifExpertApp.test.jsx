import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	
	const inputValue = 'Saitama';

	test('debe agregar nueva categoria', () => {
		
		// Renderizamos el sujeto de pruebas y obtenemos el container
		const { container } = render( <GifExpertApp /> );

		// Obtenemos el input y el form
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		// Disparo los eventos para añadir las categorias

		fireEvent.input( input, { target: { value: inputValue } } );
		fireEvent.submit( form ); // Se agrega 'Saitama'

		fireEvent.input( input, { target: { value: inputValue + '2' } } );
		fireEvent.submit( form ); // Se agrega 'Saitama2'

		// Utilizamos el container para buscar las categorias agregadas y verificamos que se hayan agregado solo 2
		expect( container.getElementsByClassName('card-grid').length ).toBe( 2 );

	});

	test('no debe agregar una nueva categoria si la categoria ya existe', () => {
		
		// Renderizamos el sujeto de pruebas y obtenemos el container
		const { container } = render( <GifExpertApp /> );

		// Obtenemos el input y el form
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		// Disparo los eventos para añadir las categorias

		fireEvent.input( input, { target: { value: inputValue } } );
		fireEvent.submit( form ); // Se agrega 'Saitama'

		fireEvent.input( input, { target: { value: inputValue } } );
		fireEvent.submit( form ); // Se agrega 'Saitama' por segunda vez

		// Utilizamos el container para buscar las categorias agregadas y verificamos que solo se haya agregado la categoria una vez
		expect( container.getElementsByClassName('card-grid').length ).toBe( 1 );

	});

});