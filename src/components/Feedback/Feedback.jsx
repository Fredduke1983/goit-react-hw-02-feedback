import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

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
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.onBtnClick} />

        <p>Statistic</p>
        {good + neutral + bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
