import React, { Component } from "react";

import ConditionalComponent from "./ConditionalComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        <ConditionalComponent isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
