import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </>
    );
  }
}
