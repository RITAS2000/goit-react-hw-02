import css from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positive,
}) {
  return (
    <div className={css.textbox}>
      <div className={css.textboxLeft}>
        <p className={css.text}>Good: {good}</p>
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
