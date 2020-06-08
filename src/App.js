import React from 'react';
import './App.css';
import Buttons from "./components/Buttons.js";
import Display from "./components/Display.js";

const operators = [" / ", " - ", " + ", " x ", " = "];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "0",
            prevVal: "",
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
            isMaxLimit: false,
            formula: "",
            equalClicked: false
        })
    }

    maxDigits() {
        if(this.state.value.length > 17) {
            let val = this.state.value;
            this.setState({
                value: "Limit",
                isMaxLimit: true,
            });

            setTimeout(() => this.setState({value: val}), 1000)
        }
    }

    handleNumbers(event) {
        if (!this.state.isMaxLimit) {
            if (this.state.equalClicked === false) {
                if (this.state.value === "0" || operators.includes(this.state.value)) {
                    this.setState({
                        value: event.target.value,
                        prevVal: event.target.value,
                        formula: this.state.formula + event.target.value,
                    })
                } else {
                    this.setState({
                        value: this.state.value + event.target.value,
                        prevVal: this.state.value + event.target.value,
                        formula: this.state.formula + event.target.value,
                    })
                }
            } else {
                this.setState({
                    value: event.target.value,
                    prevVal: event.target.value,
                    formula: event.target.value,
                })
            }
        }

        this.maxDigits();
        this.setState({
            equalClicked: false
        })
    }

    handleOperators(event) {
        if (this.state.equalClicked === false) {
            this.setState({
                value: event.target.value,
                isMaxLimit: false,
                formula: this.state.formula + event.target.value,
                equalClicked: false
            })
        } else {
            this.setState({
                value: event.target.value,
                isMaxLimit: false,
                formula: this.state.value + event.target.value,
                equalClicked: false
            })
        }
    }

    handleDecimal() {
        if (!this.state.value.includes(".")) {
            if (this.state.value === "0" && this.state.formula === "") {
                this.setState({
                    value: this.state.value + ".",
                    formula: "0."
                })
            } else {
                this.setState({
                    value: "0.",
                    formula: this.state.formula + "."
                })
            }
        }
    }

    handleEqual() {
        if(!this.state.equalClicked) {
            let result = eval(this.state.formula);
            this.setState({
                value: result.toString(),
                formula: this.state.formula + " = " + result,
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