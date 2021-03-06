import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import execute from './Counting/Counting';

const operators = ['/', '-', '+', 'x', '='];
const endsWithOperators = /[*/+-]$/;
const endsWithNegativeOperator = /[*/+]-$/;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      formula: '',
      equalClicked: false,
    };
  }

  initialize = () => {
    this.setState({
      value: '0',
      formula: '',
      equalClicked: false,
    });
  }

  handleNumbers = (event) => {
    if (!this.state.value.includes('Limit')) {
      const { value, formula, equalClicked } = this.state;
      const newValue = event.target.value;

      this.setState({ equalClicked: false });
      if (this.state.value.length > 17) {
        this.setState({ value: 'Limit' });
      } else if (!equalClicked) {
        this.setState({
          value: value === '0' || operators.includes(value) ? newValue : value + newValue,
        });
        if (newValue === '0' && value === '0') {
          if (formula === '') {
            this.setState({ formula: newValue });
          } else {
            this.setState({ formula });
          }
        } else if (/([^.0-9]0|^0)$/.test(formula)) {
          this.setState({ formula: formula.slice(0, -1) + newValue });
        } else {
          this.setState({ formula: formula + newValue });
        }
      } else {
        this.setState({
          value: event.target.value,
          formula: event.target.value,
        });
      }
    }
  }

  handleOperators = (event) => {
    const { value, formula, equalClicked } = this.state;
    const newValue = event.target.value;
    this.setState({ equalClicked: false });
    if (equalClicked) {
      this.setState({
        value: newValue,
        formula: value + newValue,
      });
    } else if (!endsWithOperators.test(formula)) {
      this.setState({
        value: newValue,
        formula: formula + newValue,
      });
    } else if (!endsWithNegativeOperator.test(formula)) {
      this.setState({
        value: newValue,
        formula: (endsWithNegativeOperator.test(formula + newValue)) ? formula + newValue : formula,
      });
    }
  }

  handleDecimal = () => {
    if (this.state.equalClicked === true) {
      this.setState({
        value: '0.',
        formula: '0.',
        equalClicked: false,
      });
    } else if (
      !this.state.value.includes('Limit')
            && !this.state.value.includes('.')
    ) {
      const { value, formula } = this.state;
      this.setState({ equalClicked: false });

      if (this.state.value.length > 17) {
        this.maxDigits();
      } else if (endsWithOperators.test(formula) || (value === '0' && formula === '')) {
        this.setState({
          value: '0.',
          formula: `${formula}0.`,
        });
      } else {
        this.setState({
          value: `${value}.`,
          formula: `${formula}.`,
        });
      }
    }
  }

  handleEqual = () => {
    if (!this.state.equalClicked) {
      const result = execute(this.state.formula);
      this.setState({
        value: result.toString(),
        formula: `${this.state.formula}=${result}`,
        equalClicked: true,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display value={this.state.value} formula={this.state.formula} />
          <Buttons
            initialize={this.initialize}
            handleNumbers={this.handleNumbers}
            handleOperators={this.handleOperators}
            handleDecimal={this.handleDecimal}
            handleEqual={this.handleEqual}
          />
        </div>
      </div>
    );
  }
}

export default App;
