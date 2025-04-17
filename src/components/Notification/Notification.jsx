import css from './Notification.module.css';

export default function Notification() {
  return (
    <div className={(css.textbox, css.yet)}>
      <p className={css.text}>No feedback yet</p>
    </div>
  );
}
