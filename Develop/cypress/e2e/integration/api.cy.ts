describe('API Requests', () => {
  
  interface Answer {
  text: string;
  isCorrect: boolean;
  }
  
  interface Question {
  question: string;
  answers: Answer[];
  }

  const questions: Question[] = [
  {
    question: "What is the output of print(2 ** 3)?",
    answers: [
    { text: "6", isCorrect: false },
    { text: "8", isCorrect: true },
    { text: "9", isCorrect: false },
    { text: "12", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    answers: [
    { text: "str", isCorrect: false },
    { text: "tuple", isCorrect: false },
    { text: "list", isCorrect: true },
    { text: "int", isCorrect: false }
    ]
  },
  {
    question: "What is the keyword used to define a function in Python?",
    answers: [
    { text: "function", isCorrect: false },
    { text: "func", isCorrect: false },
    { text: "def", isCorrect: true },
    { text: "define", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is used to create an empty set?",
    answers: [
    { text: "{}", isCorrect: false },
    { text: "[]", isCorrect: false },
    { text: "set()", isCorrect: true },
    { text: "()", isCorrect: false }
    ]
  },
  ];

  context("random questions", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", {
    body: questions,
    });
  });

  it('GET /api/questions/random', () => {
    cy.request('/api/questions/random')
    .its('body')
    .should('be.an', 'array')
    .and('have.length', questions.length)
    .and('deep.include.members', questions);
  });
  });
});