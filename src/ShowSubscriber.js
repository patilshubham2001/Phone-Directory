import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import './common/common.css'
import { Link } from 'react-router-dom'


// let subscriber = [
//   {
//     id: 1,
//     name: "Shubham",
//     phone: "9032135549"
//   },
//   {
//     id: 2,
//     name: "Ashutosh",
//     phone: "9545623007"
//   }
// ];
class ShowSubscriber extends Component {


  render() {
    return (
      // JSX Code written below
      <div>
        <Header heading="Phone Directory" />
        <div className='component-body-container'>
          <Link to="/add"><button className='custom-btn add-btn'> Add </button></Link>
          <div className='flex-container'>
            <span className='item-heading'>Name</span><br />
            <span className='item-heading'>Phone</span>
          </div>

          {
            this.props.subscriberList.map(sub => {
              return <div key={sub.id} className='flex-container'>
                <span className="item-heading element">{sub.name}</span><br />
                <span className="item-heading element">{sub.phone}</span>
                <button className='btn-delete-contact'>Delete</button>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscriber;

// create JSX Element using JavaScript CreateElement Methode

      // React.createElement("div",{id:"inputFieadl"},
      //   React.createElement("label",{htmlFor: "name"},"First Name: "),
      //   React.createElement("input",{id:"name", type: "text", placeholder:"enter your first name"}),
      //   React.createElement("button",{type:"submit",id:"btn-submit", className:"btn"},"Submit")
      //   )