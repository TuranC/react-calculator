import React from 'react';
import './App.css';
import Buttons from "./components/Buttons.js";
import Display from "./components/Display.js";
import execute from "./Counting/Counting";

const operators = ["/", "-", "+", "x", "="];
const endsWithOperators = /[*/+-]$/;
const endsWithNegativeOperator = /[*/+]-$/;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "0",
            prevVal: "0",
            isMaxLimit: false,
            formula: "",
            equalClicked: false
        };

        this.initialize = this.initialize.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
        this.maxDigits = this.maxDigits.bind(this);
    }

    initialize() {
        this.setState({
            value: "0",
            prevVal: "0",
            isMaxLimit: false,
            formula: "",
            equalClicked: false
        })
    }

    maxDigits() {
        if(this.state.value.length > 17) {
            this.setState({
                value: "Limit",
                prevVal: this.state.value,
            });

            setTimeout(() => this.setState({value: this.state.prevVal}), 1000)
        }
    }

    handleNumbers(event) {
        if (!this.state.value.includes("Limit")) {
            let {value, formula, equalClicked} = this.state;
            let newValue = event.target.value;

            this.setState({equalClicked: false})
            if(this.state.value.length > 17) {
                this.maxDigits();
            }
            else if (!equalClicked) {
                this.setState({
                    value: value === "0" || operators.includes(value) ? newValue : value + newValue,
                    prevVal: value === "0" || operators.includes(value) ? newValue : value + newValue,
                    formula: newValue === "0" && value === "0" ?
                        formula === "" ? newValue : formula
                        : /([^.0-9]0|^0)$/.test(formula)
                            ? formula.slice(0, -1) + newValue
                            : formula + newValue
                })
            } else {
                this.setState({
                    value: event.target.value,
                    prevVal: event.target.value,
                    formula: event.target.value,
                })
            }
        }
    }

    handleOperators(event) {
        if(!this.state.value.includes("Limit")) {
            let {value, formula, equalClicked} = this.state;
            let newValue = event.target.value;
            this.setState({equalClicked: false});

            if (equalClicked) {
                this.setState({
                    value: newValue,
                    formula: value + newValue,
                })
            } else if(!endsWithOperators.test(formula)){
                this.setState({
                    value: newValue,
                    formula: formula + newValue,
                })
            }
            else if(!endsWithNegativeOperator.test(formula)) {
                this.setState({
                    value: newValue,
                    formula: (endsWithNegativeOperator.test(formula + newValue)) ? formula + newValue : formula
                })
            }
        }
    }

    handleDecimal() {
        if(this.state.equalClicked === true) {
            this.setState({
                value: "0.",
                formula: "0.",
                equalClicked: false
            })
        }
        else if(
            !this.state.value.includes("Limit") &&
            !this.state.value.includes(".")
        )
        {
            let {value, formula} = this.state;
            this.setState({equalClicked: false})

            if(this.state.value.length > 17) {
                this.maxDigits();
            }
            else if (endsWithOperators.test(formula) || (value === "0" && formula === "")) {
                this.setState({
                    value: "0.",
                    formula: formula + "0."
                })
            }
            else {
                this.setState({
                    value: value + ".",
                    formula: formula + "."
                })
            }
        }
    }

    handleEqual() {
        if(!this.state.equalClicked) {
            let result = execute(this.state.formula);
            this.setState({
                value: result.toString(),
                formula: this.state.formula + "=" + result,
                equalClicked: true
            })
        }
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"calculator"}>
                    <Display value={this.state.value} formula={this.state.formula}/>
                    <Buttons initialize={this.initialize}
                             handleNumbers={this.handleNumbers}
                             handleOperators={this.handleOperators}
                             handleDecimal={this.handleDecimal}
                             handleEqual={this.handleEqual}/>
                </div>
            </div>
        );
    }
}

export default App;