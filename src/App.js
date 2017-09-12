import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AtmForm extends Component {
  constructor(props){
    super(props);
    this.state = {bal: 2000};
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }


  deposit(){
    this.setState({bal: this.state.bal + parseInt(this.refs.amount.value)});
  }


  withdraw(){
    this.setState({bal: this.state.bal - parseInt(this.refs.amount.value)});
  }


  render() {
    return (
      <div>
      <h3>
        Money: {this.state.bal}
      </h3>

            <input type="text" placeholder="Enter Amount" ref="amount"/>
      <button onClick={this.withdraw}>withdraw</button>
      <button onClick={this.deposit}>Deposit</button>
      </div>
    );
  }
}

export default AtmForm;
