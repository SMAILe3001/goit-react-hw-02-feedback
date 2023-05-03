export function Statistics({ statistis, total, positivePercentage }) {
  return (
    <ul>
      {Object.keys(statistis).map(stat => (
        <li key={stat}>
          {stat}: {statistis[stat]}
        </li>
      ))}
      <li>total: {total}</li>
      <li>positive feetback: {positivePercentage}%</li>
    </ul>
  );
}
