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
   const [isCheckAnswers, setIsCheckAnswers] = React.useState(false);

   const [answersArray, setAnswersArray] = React.useState([]);

   // fetch the trivia questions data once during each game
   React.useEffect(() => {
      async function getQuestions() {
         const res = await fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple');
         const data = await res.json();
         setTriviaQuestions(data.results);
         // adding a unique key to each question to help React
         // keep track of each component when rendering (re-hash on React docs)
         // const newArray = data.results.map(question => {
         //    const validAnswerChoices = [question.correct_answer, ...question.incorrect_answers];
         //    const choicesArray = validAnswerChoices.map(choice => {
         //       return {
         //          choice: choice,
         //          id: nanoid(),
         //          isClicked: false,
         //       }
         //    })
         //    return {
         //       question: question.question,
         //       key: nanoid(),
         //       answers: choicesArray
         //    };
         // })
         const newArray = data.results.map(question => {
            return {
               question: question.question,
               key: nanoid(),
               answers: [question.correct_answer, ...question.incorrect_answers],
               answerKeys: [nanoid(), nanoid(), nanoid(), nanoid()]
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

   // function handleClick(id) {
   //    console.log(`This answer choice's ID is: ${id}`);
   //    setAnswersArray(answersArray.map(question => {
   //       const answers = question.answers;
   //       const newChoicesArray = answers.map(choice => {
   //          // return choice.id === id ? { ...choice, isClicked: !choice.isClicked } : choice;
   //          // return choice.id === id ? { fuck: true } : choice;
   //       })
   //       return answers.id === id ? { ...question, answers: newChoicesArray } : question;
   //    }))
   //    console.log(answersArray);
   // }

   function renderQuestions() {
      // console.log('renderQuestions() is called')
      return (
         answersArray.map(question => {
            return <Question question={question.question}
               answerKeys={question.answerKeys}
               answers={question.answers}
               key={question.key} />;
         })
      )
   }

   // React.useEffect(() => {
   //    // Make sure that user can only select one answer at any given time. 
   //    // User is not allowed to select multiple answers and pray that one of them is the correct answer. 
   //    console.log("The answersArray encountered a state change.");
   // }, [answersArray])

   function setBtnText() {
      if (!isStartNewQuiz && !isCheckAnswers) {
         return 'Start Quiz'
      }
      else if (isStartNewQuiz && !isCheckAnswers) {
         return 'Check answers'
      }
      else if (isStartNewQuiz && isCheckAnswers) {
         return 'Play again'
      }
   }

   return (
      <section>
         {isStartNewQuiz ? renderQuestions() : <StartPage handleIsStartNewQuiz={() => { handleIsStartNewQuiz(isStartNewQuiz) }} />}
         <div className='startPage-btn' onClick={handleIsStartNewQuiz}>{setBtnText}</div>
      </section>
   );
}