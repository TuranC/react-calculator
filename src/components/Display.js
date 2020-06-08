import React from "react";
import "./Display.css";

class Display extends React.Component {
    render() {
        return (
            <div className={"display"}>
                <p id={"formula"} className={this.props.formula === "" ? "invisible" : ""}>{this.props.formula}</p>
                <p id={"value"}>{this.props.value}</p>
            </div>
        );
    }
}

export default Display;