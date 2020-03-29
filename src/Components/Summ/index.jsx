import React from 'react';
import { summ } from '../../Utils/utils';

class SummComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
    }
  }

   changeInputs = (event, numberPosition) => {
    event.preventDefault();
    this.setState({
      [numberPosition]: parseInt(event.target.value)
    })
  }

  sumar = (event) => {
    event.preventDefault();
    const { firstNumber, secondNumber } = this.state
    this.setState({
      result: summ(firstNumber, secondNumber)
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.sumar}>
          <p>Ingrese primer valor:<input type="text" name="valor1" onChange={(event) => this.changeInputs(event, 'firstNumber')} data-testid='firstNumber' /></p>
          <p>Ingrese segundo valor:<input type="text" name="valor2" onChange={(event) => this.changeInputs(event, 'secondNumber')} data-testid='secondNumber'/></p>
          <input type="submit" value="Sumar" onClick={this.sumar} data-testid='button' />
        </form>
        Result: <span data-testid='result'>{this.state.result}</span>
      </>
    );
  }
}

export default SummComponent;
