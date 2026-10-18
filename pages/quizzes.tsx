import { useEffect, useState } from 'react';
import Link from 'next/link';

type Question = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
};

type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch('/api/quizzes')
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch(() => setQuizzes([]));
  }, []);

  const currentQuestion = selectedQuiz?.questions[currentIndex];

  const submitAnswer = () => {
    if (!selectedQuiz || currentQuestion == null || selectedAnswer == null) return;

    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 >= selectedQuiz.questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const retryQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <h1>Quizzes</h1>
      <p>Practice with short online assessments and get instant results.</p>

      {!selectedQuiz ? (
        <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
          {quizzes.map((quiz) => (
            <div key={quiz.id} style={{ border: '1px solid #dfe7f1', borderRadius: 12, padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>{quiz.title}</h3>
              <button onClick={() => setSelectedQuiz(quiz)}>Start quiz</button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ border: '1px solid #dfe7f1', borderRadius: 12, padding: 18, marginTop: 20 }}>
          {finished ? (
            <div>
              <h3>Quiz Result</h3>
              <p>
                You scored {score} out of {selectedQuiz.questions.length}.
              </p>
              <p>
                Percentage: {Math.round((score / selectedQuiz.questions.length) * 100)}%
              </p>
              <button onClick={retryQuiz}>Retry</button>
              <button style={{ marginLeft: 8 }} onClick={() => setSelectedQuiz(null)}>
                Choose another quiz
              </button>
            </div>
          ) : currentQuestion ? (
            <div>
              <h3>{selectedQuiz.title}</h3>
              <p>
                Question {currentIndex + 1} of {selectedQuiz.questions.length}
              </p>
              <p>{currentQuestion.text}</p>

              <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
                {currentQuestion.options.map((option, index) => (
                  <label key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="radio"
                      name="answer"
                      checked={selectedAnswer === index}
                      onChange={() => setSelectedAnswer(index)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <button onClick={submitAnswer} style={{ marginTop: 20 }} disabled={selectedAnswer === null}>
                Submit answer
              </button>
            </div>
          ) : null}
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <Link href="/">← Back home</Link>
      </div>
    </main>
  );
}
