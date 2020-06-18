import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // Basic fetch api.
    // this.state = {};

    // Basic fetch api then save it in state
    // this.state = {
    //   starwars: {},
    // };

    // Basic fetch api then save it in state then put loading
    this.state = {
      isLoading: false,
      starwars: {},
    };
  }

  componentDidMount() {
    // Basic fetch api.
    // fetch("https://swapi.dev/api/films/3/").then((response) =>
    //   response.json().then((data) => console.log(data))
    // );
    //
    // Basic fetch api then save it in state
    // fetch("https://swapi.dev/api/films/2/").then((response) =>
    //   response.json().then((data) => {
    //     this.setState({
    //       starwars: data,
    //     });
    //     console.log(data);
    //   })
    // );
    //
    // Basic fetch api then save it in state then put loading
    this.setState({
      isLoading: true,
    });
    fetch("https://swapi.dev/api/films/2/").then((response) =>
      response.json().then((data) => {
        this.setState({
          isLoading: false,
          starwars: data,
        });
        console.log(data);
      })
    );
  }

  render() {
    // Whenever want to show something from the state object, create and bind the state to a new constant first,
    // later then use the constant in the return().
    const showLoading = this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>{this.state.starwars.title}</div>
    );
    return <div>{showLoading}</div>;

    // return <div>Hahaha</div>;
  }
}

export default App;
