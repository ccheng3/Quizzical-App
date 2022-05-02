import React from 'react';
import AnswerChoice from './AnswerChoice';

export default function Question(props) {
   const choices = props.choices.map(choice => {
      <AnswerChoice choice={choice} />
   })

   return (
      <div>
         <h2 className='question-h2'>{props.question}</h2>
         {choices}
      </div>
   )
}