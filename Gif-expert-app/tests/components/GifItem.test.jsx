/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('debe de hacer match con el snapshot ', ()=> {
        const { container } = render(<GifItem title= {title} url= {url}/>);
        // eslint-disable-next-line no-undef
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicando', () => {
        render(<GifItem title={title} url={url}/>)
        const { src} = screen.getByRole('img');
        expect(src).toBe(url);
    });

    test('debe de mostrar el titulo en el componente', ()=> {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});