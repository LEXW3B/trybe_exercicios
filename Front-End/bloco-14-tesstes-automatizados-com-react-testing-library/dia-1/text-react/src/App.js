import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSalvarEmail(value) {
    this.setState({
      email: '',
      saveEmail: value,
    });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="id-input">
          Email
          <input
            type="email" id="id-input"
            value={ email } onChange={(e) => this.changeEmail(e.target.value)} />
        </label>
        <button
          type="button" value="Enviar"
          onClick={() => this.changeSalvarEmail(email)}>
            Enviar
          </button>
        <button
          type="button" value="Salvar"
        >
          Voltar
        </button>
        <h2 data-testid="-id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    )
  };
}
