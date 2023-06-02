import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      // JSX Code written below
      <div>
        <Header/>
        <button> Add </button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>

      </div>
    );
  }
}

 export default App;

// create JSX Element using JavaScript CreateElement Methode

      // React.createElement("div",{id:"inputFieadl"},
      //   React.createElement("label",{htmlFor: "name"},"First Name: "),
      //   React.createElement("input",{id:"name", type: "text", placeholder:"enter your first name"}),
      //   React.createElement("button",{type:"submit",id:"btn-submit", className:"btn"},"Submit")
      //   )