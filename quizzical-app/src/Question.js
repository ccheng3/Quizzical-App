import React from 'react';
import AnswerChoice from './AnswerChoice';
import { nanoid } from 'nanoid';
import './Question.css';

export default function Question(props) {
   const [isAnswerChoiceClicked, setIsAnswerChoiceClicked] = React.useState(false);

   function handleClick() {
      setIsAnswerChoiceClicked(prevIsAnswerChoiceClicked => !prevIsAnswerChoiceClicked);
   }

   // an array of AnswerChoice components
   // console.log(props.choices);
   const choicesArray = props.choices.map(choice => {
      return <AnswerChoice
         choice={choice}
         key={nanoid()}
         handleClick={handleClick}
         isAnswerChoiceClicked={isAnswerChoiceClicked} />
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