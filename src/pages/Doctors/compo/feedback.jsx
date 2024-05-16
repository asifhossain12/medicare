import React from 'react';
import "./feedback.css";
import  { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <>
    <hr id="f1"></hr>
    <hr id="f2"></hr>
    <h2 id="feed">Feedback:</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback" id="name">Enter your feedback: <br/></label>
      <textarea
        id="feedback"
        name="feedback"
        value={feedback}
        onChange={handleFeedbackChange}
        rows={4}
        cols={50}
        required
      />
      <button id="feef"type="submit">Submit Feedback</button>
    </form>
    <hr></hr>
    <h3>All Reviews:</h3>
    <h4>Max:<br/>Great Doctor.</h4>
    <h4>Rahul:<br/>Good Heart Surgeon.</h4>
    </>
  );
};

export default FeedbackForm;
