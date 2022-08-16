import { screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('Testando todos os componentes', () => {
  it('Deve renderizar o component App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início', });
  
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o component About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /sobre/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina-nao-existe');

    const notFoundTitle = screen.getByRole('heading', { name: /Página não encontrada/i, level:1 });
    expect(notFoundTitle).toBeDefined();
  });
});
