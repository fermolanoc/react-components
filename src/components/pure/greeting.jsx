import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h1>Howdy 👋 {this.props.name}</h1>
        <h2>Your age is: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>It's my birthday!</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };
}
