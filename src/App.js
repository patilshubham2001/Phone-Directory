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
          <span className='item-heading'>Name</span><br />
          <span className='item-heading'>Phone</span>
        </div>

        {
          subscriber.map(sub =>{
            return <div key={sub.id} className='flex-container'>
              <span className="item-heading">{sub.name}</span><br />
              <span className="item-heading">{sub.phone}</span>
              
              <button className='btn-delete-contact'>Delete</button>
              
             
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