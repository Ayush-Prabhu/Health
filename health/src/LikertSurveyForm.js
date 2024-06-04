// LikertSurveyForm.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// Sample questions loaded from a JSON file (questions.json)
import questions from './Questionnaire.json';

const LikertSurveyForm = () => {
  const [userAnswers, setUserAnswers] = useState({}); // Store user answers

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send answers to the server)
    console.log('User answers:', userAnswers);
  };

  return (
    <Container>
      <h1>Likert Scale Survey</h1>
      <Form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Form.Group key={question.id}>
            <Form.Label>{question.text}</Form.Label>
            <Form.Control
              as="select"
              value={userAnswers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            >
              <option value="">Select an option</option>
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LikertSurveyForm;
