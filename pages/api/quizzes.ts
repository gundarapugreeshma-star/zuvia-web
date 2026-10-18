import type { NextApiRequest, NextApiResponse } from 'next';

const quizzes = [
  {
    id: 'math-quiz',
    title: 'Math Quick Quiz',
    questions: [
      {
        id: 'q1',
        text: 'Solve: 2x + 5 = 13. What is x?',
        options: ['2', '3', '4', '5'],
        correctIndex: 1
      },
      {
        id: 'q2',
        text: 'What is 3 × 4 + 2?',
        options: ['10', '12', '14', '16'],
        correctIndex: 2
      }
    ]
  },
  {
    id: 'science-quiz',
    title: 'Science Quiz',
    questions: [
      {
        id: 'q3',
        text: 'Which organelle is called the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cell membrane'],
        correctIndex: 1
      }
    ]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(quizzes);
}
