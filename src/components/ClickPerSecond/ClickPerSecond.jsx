import css from './Click.module.css'
import React, { Component, useState } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className={css.OnClicks}>
        <div className={css.TesterContainer}>
          <button onClick={this.increment}><h1>Clickeame!!</h1></button>
          <h1> Numero de clicks dados = {this.state.count}</h1>

        </div>
      </div>
    );
  }
}

export default Counter;