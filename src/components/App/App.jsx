import css from './App.module.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';
import { useState, useEffect } from 'react';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stored = localStorage.getItem('feedbacks');
    return stored ? JSON.parse(stored) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((oldFeedbacks) => ({
      ...oldFeedbacks,
      [feedbackType]: oldFeedbacks[feedbackType] + 1,
    }));
  };

  const handleResetClick = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positive = Math.round((feedbacks.good / totalFeedback) * 100);
  return (
    <div className={css.contentbox}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetClick={handleResetClick}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}
