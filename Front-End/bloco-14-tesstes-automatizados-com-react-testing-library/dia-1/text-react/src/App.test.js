import { render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  //acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");

  //interagir com os elemento (se for necessário)

  //fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");

});
