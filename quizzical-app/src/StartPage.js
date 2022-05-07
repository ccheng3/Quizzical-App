import React from 'react';
import Button from './Button';
import './StartPage.css';

// This component is the Quizzical start page. 
// H2 that says 'Quizzical'
// Div with description --> 'Let's do some trivia!'
// Btn element that says 'Start quiz'

export default function StartPage(props) {
   return (
      <div className='startPage-main'>
         <h2 className='startPage-title'>Quizzical</h2>
         <div className='startPage-description'>Let's do some trivia! (Drinks not provided but def encouraged!)</div>
         <Button class='startPage-btn' text='Start quiz' handleClick={props.handleIsStartNewQuiz} />
         {/* <div className='startPage-btn' onClick={props.handleIsStartNewQuiz}>Start quiz</div> */}
      </div>
   )
}