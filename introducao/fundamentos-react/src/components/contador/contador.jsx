import React, { Component } from 'react';
import './contador.css';

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
        <h2>Contador de Passos:</h2>
        <h3>Passos andados: {this.state.numero}</h3>
        <label htmlFor='passos'>
          {' '}
          Passos:
          <input
            id='passos'
            type='number'
            value={this.state.passo}
            onChange={this.passos}
          />
        </label>
        <br />
        <button
          onClick={this.inc}
          className='my-bnt'
        >
          {' '}
          +
        </button>
        <button
          onClick={this.dec}
          className='my-bnt'
        >
          {' '}
          -
        </button>
      </div>
    );
  }
}

export default Contador;
