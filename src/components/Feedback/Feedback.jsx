import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = ({ target }) => {
    this.setState(({ good, neutral, bad }) => {
      if (target.name === 'good') {
        return {
          good: good + 1,
        };
      } else if (target.name === 'neutral') {
        return {
          neutral: neutral + 1,
        };
      } else if (target.name === 'bad') {
        return {
          bad: bad + 1,
        };
      }
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button name="good" onClick={this.onBtnClick}>
          Good
        </button>
        <button name="neutral" onClick={this.onBtnClick}>
          Neutral
        </button>
        <button name="bad" onClick={this.onBtnClick}>
          Bad
        </button>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
