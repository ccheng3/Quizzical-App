import React from 'react';
import { render } from 'react-dom';
import Question from './Question';
import StartPage from './StartPage';
import { nanoid } from 'nanoid';

// https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple

export default function App() {
   // save the trivia questions in state to be changed upon new game
   const [triviaQuestions, setTriviaQuestions] = React.useState([]);
   // this hook triggers the change from start page to questions panel (b/c when true,
   // you are starting a new quiz round)
   const [isStartNewQuiz, setIsStartNewQuiz] = React.useState(false);

   const [answersArray, setAnswersArray] = React.useState([]);

   // fetch the trivia questions data once during each game
   React.useEffect(() => {
      async function getQuestions() {
         const res = await fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple');
         const data = await res.json();
         setTriviaQuestions(data.results);
         // adding a unique key to each question to help React
         // keep track of each component when rendering (re-hash on React docs)
         const newArray = data.results.map(question => {
            const validAnswerChoices = [question.correct_answer, ...question.incorrect_answers];
            const choicesArray = validAnswerChoices.map(choice => {
               return {
                  choice: choice,
                  id: nanoid(),
                  isClicked: false,
               }
            })
            return {
               question: question.question,
               key: nanoid(),
               answers: choicesArray
            };
         })
         setAnswersArray(newArray);
      };
      getQuestions();
   }, []);

   function printQuestions() {
      triviaQuestions.forEach(question => {
         console.log(question);
      })
   }

   function handleIsStartNewQuiz() {
      setIsStartNewQuiz(prevVal => !prevVal);
   }

   function renderQuestions() {
      return answersArray.map(question => {
         return <Question question={question.question}
            answers={question.answers}
            key={question.key} />;
      })
   }

   React.useEffect(, [answersArray])


   return (
      <section>
         {isStartNewQuiz ? renderQuestions() : <StartPage handleIsStartNewQuiz={() => { handleIsStartNewQuiz(isStartNewQuiz) }} />}
      </section>
   );
}