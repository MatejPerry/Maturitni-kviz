
import { useState } from "react";
import "../../css/style.css";
import "./Quiz.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Question from "../../components/Quiz/QuizQuestion.jsx";
import questions from "../../data/questions.js";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[currentQuestion];

  function selectAnswer(index) {
    setSelectedAnswer(index);
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  }

  return (
    <>
      <div className="quiz">
        <Header />

        <h1 className="page-title">Kvíz</h1>

        {question && (
          <>
            <Question
              question={question}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={selectAnswer}
            />

            <button className="quiz-next" onClick={nextQuestion}>
              Další otázka
            </button>
          </>
        )}

        <Footer />
      </div>
    </>
  );
}
