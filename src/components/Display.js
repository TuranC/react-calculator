import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <p id="formula" className={this.props.formula === '' ? 'invisible' : ''}>{this.props.formula}</p>
        <p id="value">{this.props.value}</p>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
  formula: PropTypes.string.isRequired,
};

export default Display;
