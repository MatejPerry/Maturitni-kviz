
import "../../css/style.css";
import "./QuizQuestion.css";

export default function Question({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer
}) {
  return (
    <div className="quiz-content">
      <h2 className="quiz-progress">
        Otázka {questionNumber} z {totalQuestions}
      </h2>

      <h3>{question.question}</h3>

      <div className="quiz-answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={selectedAnswer === index ? "selected" : ""}
            onClick={() => onSelectAnswer(index)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
