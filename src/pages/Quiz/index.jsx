
import { useState } from "react";
import "../../css/style.css";
import "./Quiz.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import questions from "../../data/questions.js";
// import questions from "../../data/questions.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion];

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <>
      <div className="quiz">
        <Header />

        <h1 className="page-title">Kvíz</h1>

        {question && (
          <div className="quiz-content">
            <h2 className="quiz-progress">
              Otázka {currentQuestion + 1} z {questions.length}
            </h2>

            <h3>{question.question}</h3>

            <div className="quiz-answers">
              {question.answers.map((answer, index) => (
                <button key={index}>
                  {answer}
                </button>
              ))}
            </div>

            <button className="quiz-next" onClick={nextQuestion}>
              Další otázka
            </button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
