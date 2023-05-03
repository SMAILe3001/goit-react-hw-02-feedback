import { Component } from 'react';
import statistickFeedback from '../../data/state';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class Feedback extends Component {
  state = { ...statistickFeedback };

  statisticsUpdate = ({ target: { textContent } }) => {
    this.setState(prevState => {
      return {
        [textContent]: prevState[textContent] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = 0;

    Object.keys(this.state).map(stat => (total = total + this.state[stat]));

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? Math.round((good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.statisticsUpdate}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              statistis={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
