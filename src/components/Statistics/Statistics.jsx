import PropTypes from 'prop-types';

export function Statistics({ statistis, total, positivePercentage }) {
  return (
    <ul>
      {Object.keys(statistis).map(stat => (
        <li key={stat}>
          {stat}: {statistis[stat]}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Tositive feetback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  statistis: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
