import { Component } from 'react';
import { StatStyle, StatTitle } from './statistics.styled';

export class Statistics extends Component {
  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(good, neutral, bad) {
    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <StatStyle>
        <p>Good: {good}</p>

        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback(good, neutral, bad)}</p>
        <p>
          Positive feedback:
          {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
        </p>
      </StatStyle>
    );
  }
}
