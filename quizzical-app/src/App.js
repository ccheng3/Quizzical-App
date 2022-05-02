import React from 'react';
import { render } from 'react-dom';
import Question from './Question';
import StartPage from './StartPage';
import TriviaPage from './TriviaPage';

// https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple

export default function App() {
   // save the trivia questions in state to be changed upon new game
   const [triviaQuestions, setTriviaQuestions] = React.useState([]);
   // save the user's answers in state 
   const [userAnswers, setUserAnswers] = React.useState([]);

   // fetch the trivia questions data once during each game
   React.useEffect(() => {
      async function getQuestions() {
         const res = await fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple');
         const data = await res.json();
         setTriviaQuestions(data.results);
      };
      getQuestions();
   }, []);

   function printQuestions() {
      triviaQuestions.forEach(question => {
         console.log(question.question);
      })
   }
   printQuestions();

   function renderQuestions() {
      return triviaQuestions.map(question => {
         const validAnswerChoices = [question.correct_answer, ...incorrect_answers];
         return <Question choices={validAnswerChoices} />;
      })
   }


   return (
      <section>
         <StartPage renderQuestions={renderQuestions} />
      </section>
   );
}