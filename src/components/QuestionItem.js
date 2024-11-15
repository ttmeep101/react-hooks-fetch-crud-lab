import React from "react";

function QuestionItem({ question, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method:"DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      fetch(`http://localhost:4000/questions`)
      .then(resp => resp.json())
      .then(data => setQuestions(data))
    })
  }

  const handleEdit = (event) => {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        "correctIndex": event.target.value
      })
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleEdit} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
