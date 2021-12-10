import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Counter.module.css';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    switch (e.target.dataset.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const goodPercent = Math.round((good / total) * 100);
  return (
    <div className="Counter">
      <Section title="Please leave feedback" />
      <FeedbackOptions onIncrement={handleIncrement} />
      <Section title="Statistics" />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          goodPercent={goodPercent}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Counter.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  goodPercent: PropTypes.number,
};

export default Counter;
