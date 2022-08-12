import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import App from './App';

describe('Tela de inserção de email', () => {

  it('Verifica se existe um input de email na tela', () => {
    //acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");

    //interagir com os elemento (se for necessário)

    //fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
    expect(inputEmail).toHaveProperty("type", "email")

  });

  it('Verifica se existe botões na tela', () => {
    //acessar os elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole("button");

    //interagir com os elemento (se for necessário)

    //fazer os testes
    expect(buttons).toHaveLength(2);
  });

  it('Verifica se existe o botão de "Enviar"', ()=> {
    //acessar
    render(<App />);
    const button = screen.getByTestId("id-send");
    
    //iteragir

    //testar
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar")
  });

  it('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    //acessar
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");
    
    //interagir
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button);

    //testar
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  });
});
