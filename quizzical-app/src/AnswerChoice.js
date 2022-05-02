import React from 'react';
import './AnswerChoice.css'

export default function AnswerChoice(props) {
   // the regex removes the HTML entities, spent for too long trying to
   // figure out dynamic rendering of HTML entities in React with a regex
   // so figured to completely remove all entities for time being while 
   // focusing on implementing core app logic. Will return afterwards...
   // Documented well by Shripadk's 2014 guide
   // https://shripadk.github.io/react/docs/jsx-gotchas.html

   return (
      <span className={props.isAnswerChoiceClicked ? `answerchoice-btn-clicked` : `answerchoice-btn-unclicked`} onClick={props.handleClick}>
         {props.choice.split(/\&.+?\;/g)}
      </span>
   )
}