import Button from '../Button/Button.jsx';
import css from './Options.module.css';

export default function Options({ total, updateFeedback, handleResetClick }) {
  return (
    <div className={css.buttonbox}>
      <div className={css.buttonfirstbox}>
        <Button text="Good" onClick={() => updateFeedback('good')} />
        <Button text="Neutral" onClick={() => updateFeedback('neutral')} />
        <Button text="Bad" onClick={() => updateFeedback('bad')} />
      </div>
      {total > 0 && <Button text="Reset" onClick={handleResetClick} />}
    </div>
  );
}
