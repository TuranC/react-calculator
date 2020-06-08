import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

class Buttons extends React.Component {
    render() {
        return (
            <div className={"calc-btns"}>
                <button value={"AC"} id={"jumbo"} className={"red-color"} onClick={this.props.initialize}>AC</button>
                <button value={"/"} className={"bg-color-gray"} onClick={this.props.handleOperators}>/</button>
                <button value={"*"} className={"bg-color-gray"} onClick={this.props.handleOperators}>x</button>

                <button value={"7"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>7</button>
                <button value={"8"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>8</button>
                <button value={"9"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>9</button>
                <button value={"-"} className={"bg-color-gray"} onClick={this.props.handleOperators}>-</button>

                <button value={"4"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>4</button>
                <button value={"5"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>5</button>
                <button value={"6"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>6</button>
                <button value={"+"} className={"bg-color-gray"} onClick={this.props.handleOperators}>+</button>

                <button value={"1"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>1</button>
                <button value={"2"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>2</button>
                <button value={"3"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>3</button>

                <button value={"0"} id={"jumbo"} className={"bg-color-darkgray"} onClick={this.props.handleNumbers}>0
                </button>
                <button value={"."} className={"bg-color-darkgray"} onClick={this.props.handleDecimal}>.</button>
                <button value={"="} id={"equals"} onClick={this.props.handleEqual}>=</button>
            </div>
        );
    }
}

Buttons.propTypes = {
    handleNumbers: PropTypes.func.isRequired,
    handleOperators: PropTypes.func.isRequired,
    handleDecimal: PropTypes.func.isRequired,
    handleEqual: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired
}

export default Buttons;