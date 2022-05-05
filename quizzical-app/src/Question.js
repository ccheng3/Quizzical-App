import React from 'react';
import AnswerChoice from './AnswerChoice';
import { nanoid } from 'nanoid';
import './Question.css';

export default function Question(props) {
   // const [isAnswerChoiceClicked, setIsAnswerChoiceClicked] = React.useState(false);

   // const validAnswersArray = props.choices.map(choice => {
   //    return { choice: choice, isClicked: false, id: nanoid() };
   // })
   const [validAnswers, setValidAnswers] = React.useState(props.answers)

   function handleClick(id) {
      console.log(`This answer choice's ID is: ${id}`);
      setValidAnswers(prevValidAnswers => {
         return prevValidAnswers.map(validAnswer => {
            return validAnswer.id === id ? { ...validAnswer, isClicked: !validAnswer.isClicked } : validAnswer
         })
      });
   }

   // an array of AnswerChoice components
   const choicesArray = validAnswers.map(answer => {
      return <AnswerChoice
         choice={answer.choice}
         key={answer.id}
         id={answer.id}
         isClicked={answer.isClicked}
         handleClick={handleClick} />
   })

   const questionStringArray = props.question.split(/\&.+?\;/g);

   return (
      <div className='questions-panel'>
         <h2 className='question-h2'>{questionStringArray}</h2>
         {choicesArray}
         <hr className='question-hr'></hr>
      </div>
   )
}