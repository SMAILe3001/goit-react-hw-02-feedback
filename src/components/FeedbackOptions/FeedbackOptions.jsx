export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(btn => (
        <button key={btn} onClick={onLeaveFeedback}>
          {btn}
        </button>
      ))}
    </div>
  );
}
