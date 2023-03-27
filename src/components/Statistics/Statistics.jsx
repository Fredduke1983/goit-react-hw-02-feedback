import { Component } from 'react';
import { StatStyle } from './statistics.styled';

export class Statistics extends Component {
  countPositiveFeedbackPercentage(good, total) {
    if (!total) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <StatStyle>
        <p>Good: {good}</p>

        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>
          Positive feedback:
          {this.countPositiveFeedbackPercentage(good, total)}%
        </p>
      </StatStyle>
    );
  }
}
