import React, { Component } from "react";

class ComponentForm extends Component {
  // // Basic Form Continuous Update To State
  // constructor() {
  //   super();
  //   this.state = {
  //     name: ""
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // // Basic Form Continuous Update To State
  // handleChange(event) {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }
  // // Basic Form Continuous Update To State
  // render() {
  //   return (
  //     <form>
  //       Full Name :
  //       <input
  //         type="text"
  //         name="name"
  //         value={this.state.name}
  //         onChange={this.handleChange}
  //       ></input>
  //       <h1>{this.state.name}</h1>
  //     </form>
  //   );
  // }
  // SECTION B =>
  // // Prevent DRY Method
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     email: "",
  //     password: "",
  //     description: "",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // // Prevent DRY Method
  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // // Best Practice // Search for react synthetic event
  // handleChange(event) {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }
  // // Prevent DRY Method
  // render() {
  //   return (
  //     <form>
  //       Full Name :
  //       <input
  //         type="text"
  //         name="name"
  //         value={this.state.name}
  //         onChange={this.handleChange}
  //       ></input>
  //       <h1>{this.state.name}</h1>
  //       <input
  //         type="email"
  //         name="email"
  //         value={this.state.email}
  //         onChange={this.handleChange}
  //       ></input>
  //       <h1>{this.state.email}</h1>
  //       <input type="password" name="pasword" value=""></input>
  //       <textarea type="password" name="pasword" value=""></textarea>
  //       <button>SUBMIT</button>
  //     </form>
  //   );
  // }

  // SECTION C

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      description: "",
      isFriendly: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Best Practice // Search for react synthetic event
  handleChange(event) {
    const { name, value, checked, type } = event.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  // Prevent DRY Method
  render() {
    return (
      <form>
        Full Name :
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <h1>{this.state.name}</h1>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        <h1>{this.state.email}</h1>
        <input type="password" name="pasword" value=""></input>
        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        ></input>{" "}
        Is Frinedly ?<button>SUBMIT</button>
      </form>
    );
  }
}

export default ComponentForm;
