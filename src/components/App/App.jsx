import css from './App.module.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import { useState } from 'react';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      return JSON.parse(storedFeedbacks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const updateFeedback = (feedbackType) => {
    setFeedbacks((oldFeedbacks) => {
      const updatedFeedbacks = {
        ...oldFeedbacks,
        [feedbackType]: oldFeedbacks[feedbackType] + 1,
      };

      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));

      return updatedFeedbacks;
    });
  };
  const handleResetClick = () => {
    const resetFeedbacks = { good: 0, neutral: 0, bad: 0 };
    setFeedbacks(resetFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(resetFeedbacks));
  };

  return (
    <div className={css.contentbox}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetClick={handleResetClick}
        total={feedbacks.good + feedbacks.neutral + feedbacks.bad}
      />
      <Feedback
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
      />
    </div>
  );
}
