import React from 'react';
import StartPage from './StartPage';
import TriviaPage from './TriviaPage';

// https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple

export default function App() {
   // save the trivia questions in state to be changed upon new game
   const [triviaQuestions, setTriviaQuestions] = React.useState([]);

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


   return (
      <section>
         <StartPage />
      </section>
   );
}