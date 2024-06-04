// LikertSurveyForm.js
import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

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
        {questions.map((question) => {
          if (question.type === 'BRIEF') {
            // Render radio buttons for BRIEF questions
            return (
              <Form.Group key={question.id}>
                <Form.Label>{question.id + ". " + question.text}</Form.Label>
                {question.options.map((option) => (
                  <Form.Check
                    key={option}
                    type="radio"
                    label={option}
                    name={question.id} // Group radio buttons by question ID
                    value={option}
                    checked={userAnswers[question.id] === option}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  />
                ))}
              </Form.Group>
            );
          } else {
            // Render a table for other question types
            return (
              <div key={question.id}>
                
                <Table striped bordered>
                  <tbody>
                  <tr>
                  <td>
                  <h4>{question.id + ". " + question.text}</h4></td>
                    {question.options.map((option, index) => (
                      
                        <td key={option}>{option}
                        
                          <Form.Check
                            type="radio"
                            name={question.id} // Group radio buttons by question ID
                            value={option}
                            checked={userAnswers[question.id] === option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          />
                        </td>
                      
                    ))}
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          }
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LikertSurveyForm;
