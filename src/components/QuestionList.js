import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questions, setQuestions}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <QuestionItem
            key = {index}
            question = {question}
            setQuestions = {setQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
