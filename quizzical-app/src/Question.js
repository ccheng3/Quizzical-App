import React from 'react';
import AnswerChoice from './AnswerChoice';
import { nanoid } from 'nanoid';
import './Question.css';

export default function Question(props) {
   // an array of AnswerChoice components
   // console.log(props.choices);
   const choicesArray = props.choices.map(choice => {
      return <AnswerChoice choice={choice} key={nanoid()} />
   })
   console.log(choicesArray);

   const questionStringArray = props.question.split(/\&.+?\;/g);

   return (
      <div>
         <h2 className='question-h2'>{questionStringArray}</h2>
         {choicesArray}
      </div>
   )
}