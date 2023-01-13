import React, { Component } from 'react';

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props || 0,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  passos = (e) => {
    this.setState({
      passo: +e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <label htmlFor='passos'>
          {' '}
          Passos:
          <input
            style={{ width: 60 }}
            id='passos'
            type='number'
            value={this.state.passo}
            onChange={this.passos}
          />
        </label>
        <br />
        <button
          onClick={this.inc}
          style={{ width: 60 }}
        >
          {' '}
          +
        </button>
        <button
          onClick={this.dec}
          style={{ width: 60 }}
        >
          {' '}
          -
        </button>
      </div>
    );
  }
}

export default Contador;
