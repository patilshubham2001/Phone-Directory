import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  
  render() {

    let subscriber = [
      {
        id:1,
        name: "Shubham",
        phone: "9032135549"
      },
      {
        id:2,
        name: "Ashutosh",
        phone: "9545623007"
      }
    ];
    return (
      // JSX Code written below
      <div  className='component-body-container'>
        <Header />
        <button className='custom-btn add-btn'> Add </button>
        <div className='flex-container'>
          <span className='name-heading'>Name</span><br />
          <span className='phone-heading'>Phone</span>
        </div>

        {
          subscriber.map(sub =>{
            return <div key={sub.id} className='flex-container'>
              <span className="name-heading">{sub.name}</span><br />
              <span className="phone-heading">{sub.phone}</span>
            </div>
          })
        }
        
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