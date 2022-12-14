import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }

  }

handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ 
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e react: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">

          < EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />

          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Idade
            <input
              name="idade"
              type="number"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Vai comparecer á conferência?
            <input
              name="vaiComparecer"
              type="checkbox"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select
              name="palavraChaveFavorita"
              value={this.state.palavraChaveFavorita}
              onChange={this.handleChange}
            >
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>

        </form>
      </div>
    )
  }
}
