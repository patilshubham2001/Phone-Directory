import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


class PhoneDirectory extends Component {


    constructor() {
        super();
        this.state = {
            subscriberList : [
                {
                    id: 1,
                    name: 'Shubham',
                    phone: '9022137549'
                },
                {
                    id: 2,
                    name: 'Aashutosh',
                    phone: '8600800477'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) =>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length -1].id+1;
        }
        else{
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log("Phone Directory");
        console.log(this.state.subscriberList);
    }

    render() {
        return (

            <Router>
                <div>
                <Routes>
                <Route exact path="/" element={<ShowSubscriber subscriberList={this.state.subscriberList} />} />
                <Route exact path="/add" element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                </Routes>
                </div>
            </Router>
            //  <AddSubscriber addSubscriberHandler ={this.addSubscriberHandler}/>
        );
    }
}

export default PhoneDirectory;