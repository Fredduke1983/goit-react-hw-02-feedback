import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { FeedbackStyle, StatTitle } from './app.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  total({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackStyle>
        <FeedbackOptions onLeaveFeedback={this.onBtnClick} />

        <StatTitle>Statistic</StatTitle>
        {this.total(this.state) ? (
          <Statistics
            total={this.total(this.state)}
            props={this.state}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification />
        )}
      </FeedbackStyle>
    );
  }
}
