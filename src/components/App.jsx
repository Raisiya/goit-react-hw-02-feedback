import {Component} from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const option = evt.target.id;
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    })};
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };
  
  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return Math.round((good / total) * 100);
};

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
  
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title='Statistics'>
          {total === 0 ? (
            <Notification message='There is no feedback' />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={total === 0 ? 0
              : positivePercentage}
            /> 
          )}
        </Section>
      </>
    );
}}