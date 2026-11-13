
import { useState } from "react";
import "../../css/style.css";
import "./Quiz.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Question from "../../components/Quiz/QuizQuestion.jsx";
import questions from "../../data/questions.js";

export default function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[currentQuestion];

  function startQuiz() {
    setQuizStarted(true);
  }

  function selectAnswer(index) {
    setSelectedAnswer(index);
  }

  function nextQuestion() {
    if (
      selectedAnswer !== null &&
      currentQuestion < questions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  }

  return (
    <div className="quiz">
      <Header />

      <h1 className="page-title">Kvíz</h1>

      {!quizStarted ? (
        <div className="quiz-intro">
          <div className="quiz-intro-icon">
            <span>?</span>
          </div>

          <p className="quiz-intro-label">MATURITNÍ KVÍZ</p>

          <h2>Ověřte si své znalosti!</h2>

          <p className="quiz-intro-description">
            Vyzkoušejte si, jak dobře jste připraveni na maturitu.
            Odpovídejte na otázky z různých oblastí a sledujte,
            jak se vaše znalosti postupně zlepšují.
          </p>

          <div className="quiz-info">
            <div className="quiz-info-card">
              <span className="quiz-info-icon">◈</span>
              <h3>3 úrovně obtížnosti</h3>
              <p>Od jednoduchých až po náročnější otázky.</p>
            </div>

            <div className="quiz-info-card">
              <span className="quiz-info-icon">↗</span>
              <h3>Adaptivní obtížnost</h3>
              <p>Obtížnost se přizpůsobuje vašim odpovědím.</p>
            </div>

            <div className="quiz-info-card">
              <span className="quiz-info-icon">✓</span>
              <h3>Závěrečné hodnocení</h3>
              <p>Na konci zjistíte, jak jste si vedli.</p>
            </div>
          </div>

          <button className="quiz-start" onClick={startQuiz}>
            Spustit kvíz
            <span>→</span>
          </button>

          <p className="quiz-intro-note">
            Připravte se, soustřeďte se a ukažte, co ve vás je.
          </p>
        </div>
      ) : (
        question && (
          <>
            <Question
              question={question}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={selectAnswer}
            />

            <button
              className="quiz-next"
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
            >
              Další otázka →
            </button>
          </>
        )
      )}

      <Footer />
    </div>
  );
}
