import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

class Buttons extends React.Component {
  render() {
    return (
      <div className="calc-btns">
        <button type="button" value="AC" id="jumbo" className="red-color" onClick={this.props.initialize}>AC</button>
        <button type="button" value="/" className="bg-color-gray" onClick={this.props.handleOperators}>/</button>
        <button type="button" value="*" className="bg-color-gray" onClick={this.props.handleOperators}>x</button>

        <button type="button" value="7" className="bg-color-darkgray" onClick={this.props.handleNumbers}>7</button>
        <button type="button" value="8" className="bg-color-darkgray" onClick={this.props.handleNumbers}>8</button>
        <button type="button" value="9" className="bg-color-darkgray" onClick={this.props.handleNumbers}>9</button>
        <button type="button" value="-" className="bg-color-gray" onClick={this.props.handleOperators}>-</button>

        <button type="button" value="4" className="bg-color-darkgray" onClick={this.props.handleNumbers}>4</button>
        <button type="button" value="5" className="bg-color-darkgray" onClick={this.props.handleNumbers}>5</button>
        <button type="button" value="6" className="bg-color-darkgray" onClick={this.props.handleNumbers}>6</button>
        <button type="button" value="+" className="bg-color-gray" onClick={this.props.handleOperators}>+</button>

        <button type="button" value="1" className="bg-color-darkgray" onClick={this.props.handleNumbers}>1</button>
        <button type="button" value="2" className="bg-color-darkgray" onClick={this.props.handleNumbers}>2</button>
        <button type="button" value="3" className="bg-color-darkgray" onClick={this.props.handleNumbers}>3</button>

        <button type="button" value="0" id="jumbo" className="bg-color-darkgray" onClick={this.props.handleNumbers}>
          0
        </button>
        <button type="button" value="." className="bg-color-darkgray" onClick={this.props.handleDecimal}>.</button>
        <button type="button" value="=" id="equals" onClick={this.props.handleEqual}>=</button>
      </div>
    );
  }
}

Buttons.propTypes = {
  handleNumbers: PropTypes.func.isRequired,
  handleOperators: PropTypes.func.isRequired,
  handleDecimal: PropTypes.func.isRequired,
  handleEqual: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

export default Buttons;
