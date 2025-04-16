import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad }) {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round((good / totalFeedback) * 100);

  if (totalFeedback === 0) {
    return (
      <div className={(css.textbox, css.yet)}>
        <p className={css.text}>No feedback yet</p>
      </div>
    );
  }
  return (
    <div className={css.textbox}>
      <div className={css.textboxLeft}>
        <p className={css.text}>Cood: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
      </div>
      <div className={css.textboxRight}>
        <p className={css.text}>Total: {totalFeedback}</p>
        <p className={css.text}>Positive: {positive}%</p>
      </div>
    </div>
  );
}
