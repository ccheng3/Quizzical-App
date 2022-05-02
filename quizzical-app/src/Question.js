import React from 'react';
import AnswerChoice from './AnswerChoice';
import { nanoid } from 'nanoid';

export default function Question(props) {
   // an array of AnswerChoice components
   const choices = props.choices.map(choice => {
      <AnswerChoice choice={choice} key={nanoid()} />
   })

   const questionStringArray = props.question.split(/\&.+?\;/g);
   console.log(questionStringArray);

   return (
      <div>
         <h2 className='question-h2'>{questionStringArray}</h2>
         <div>{['First ', <span>&middot;</span>, ' Second']}</div>
         {choices}
      </div>
   )
}