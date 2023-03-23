import { Component } from 'react';
import {
  FeedbackBtns,
  FeedbackBtnsStyle,
  FeedbackBtnsTitle,
} from './feedbackBtns.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <FeedbackBtnsTitle>Please leave feedback</FeedbackBtnsTitle>
        <FeedbackBtnsStyle>
          <FeedbackBtns name="good" onClick={onLeaveFeedback}>
            Good
          </FeedbackBtns>
          <FeedbackBtns name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </FeedbackBtns>
          <FeedbackBtns name="bad" onClick={onLeaveFeedback}>
            Bad
          </FeedbackBtns>
        </FeedbackBtnsStyle>
      </>
    );
  }
}
