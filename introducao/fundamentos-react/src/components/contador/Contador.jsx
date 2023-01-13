import React, { Component } from 'react';
import './Contador.css';

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 0,
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

  setPassos = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador de Passos:</h2>
        <Display numero={this.state.numero}></Display>
        <PassoForm
          passo={this.state.passo}
          setPassos={this.setPassos}
        ></PassoForm>
        <Botoes
          incrementar={this.inc}
          decrementar={this.dec}
        ></Botoes>

        <br />
      </div>
    );
  }
}

export default Contador;
