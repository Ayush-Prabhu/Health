import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

import questions from './Questionnaire.json';

const SurveyForm = () => {
  const [userAnswers, setUserAnswers] = useState({}); // Store user answers

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    // Check if the value is a valid integer before updating state
    
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [id]: value,
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
          } else if(question.type === "TABLE"){
            // Render a table for other question types
            return (
              <div key={question.id}>
                
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>
                        Items
                      </th>
                      {
                        question.hoptions.map((option) => (
                          <th key={option}> 
                            {option}
                          </th>
                        ))
                      }
                    </tr>
                  </thead>
                  <tbody>
                    
                      {question.qs.map((qn) => (
                        <tr key={qn.id}>
                        <td>
                          <h4>{qn.id + ". " + qn.text}</h4>
                        </td>
                          {qn.options.map((option) => (
                            <td key={option}>
                            <Form.Check
                              key={option}
                              type="radio"
                              name={qn.id} // Group radio buttons by question ID
                              value={option}
                              checked={userAnswers[qn.id] === option}
                              onChange={(e) => handleAnswerChange(qn.id, e.target.value)}
                            />
                            </td>
                          ))}
                        
                        </tr>
                      ))}
                    
                  </tbody>
                </Table>
              </div>
            );
          }
          else if(question.type==="INFO"){
            return(
              <div key={question.id}>
                <Form.Label>{question.id + ". "+question.text}</Form.Label>
                <Table key={question.id}>
                  {question.info.map((row) =>
                  (
                    <tr>
                      <td>
                        {row}
                      </td>
                    </tr>
                  ))}
                </Table>
                <Form.Control
                  type="text"
                  id={question.id}
                  pattern="[0-9]*\.?[0-9]*" // Allow only integers
                  onChange={handleTextChange} // Use handleTextChange for input change
                />
              </div>
            );
          }else if (question.type === "MULTIINFO") {
  return (
    <div key={question.id}>
      <Form.Label>{question.id + ". " + question.text}</Form.Label>
      <Table key={question.id}>
        <tbody>
          {question.info.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Form.Control
        type="text"
        id={question.id}
        pattern={question.regex} // Allow only integers
        onChange={handleTextChange} // Use handleTextChange for input change
      />
    </div>
  );
}
          return null; // Added to handle the case where neither 'BRIEF' nor 'TABLE' nor 'INFO'
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SurveyForm;
