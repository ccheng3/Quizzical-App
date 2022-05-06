import React from 'react';
import AnswerChoice from './AnswerChoice';
import './Question.css';

export default function Question(props) {
   const [userChoices, setUserChoices] = React.useState(
      props.answers.map((choice, index) => {
         // console.log(choice)
         return { choice: choice, isClicked: false, id: props.answerKeys[index] };
      })
   );

   function handleClick(id) {
      // console.log(`This answer choice's ID is: ${id}`);
      setUserChoices(prevuserChoices => {
         return prevuserChoices.map(choice => {
            // if that choice id is equal to the id that user clicked, then toggle that AnswerChoice
            // otherwise set that AnswerChoice's isClicked to false b/c user can only choose one answer
            // for each question (can't choose multiple answers and hope one of them is correct) 
            return choice.id === id ? { ...choice, isClicked: !choice.isClicked } : { ...choice, isClicked: false }
         })
      });
   }

   // an array of AnswerChoice components
   const choicesArray = userChoices.map(choice => {
      // console.log('choicesArray is rendered.');
      return <AnswerChoice
         choice={choice.choice}
         key={choice.id}
         id={choice.id}
         isClicked={choice.isClicked}
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