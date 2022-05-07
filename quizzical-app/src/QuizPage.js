import React from 'react';
import Button from './Button';
import './QuizPage.css';

export default function QuizPage(props) {
   function checkAnswers() {
      console.log('User wants to check answers!');
   }

   return (
      <div className='quizPage-panel'>
         <>{props.renderQuestions()}</>
         <Button class='quizPage-btn' text='Check answers' handleClick={checkAnswers} />
      </div>
   )
}