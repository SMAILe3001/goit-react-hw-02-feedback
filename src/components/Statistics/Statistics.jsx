import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

export function Statistics({ statistis, total, positivePercentage }) {
  return (
    <ul>
      {Object.keys(statistis).map(stat => (
        <Item key={stat}>
          {stat}: {statistis[stat]}
        </Item>
      ))}
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  statistis: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
