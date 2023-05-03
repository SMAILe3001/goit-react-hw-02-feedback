import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(btn => (
        <Button key={btn} onClick={onLeaveFeedback}>
          {btn}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
