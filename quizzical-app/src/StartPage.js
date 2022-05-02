import React from 'react';

// This component is the Quizzical start page. 
// H2 that says 'Quizzical'
// Div with description --> 'Let's do some trivia!'
// Btn element that says 'Start quiz'

export default function StartPage(props) {
   return (
      <div className='startPage-main'>
         <h2 className='startPage-title'>Quizzical</h2>
         <div className='startPage-description'>Let's do some trivia! (Drinks not provided but def encouraged!)</div>
         <div className='startPage-btn' onClick={props.handleIsStartNewQuiz}>Start quiz</div>
      </div>
   )
}