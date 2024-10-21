describe('API Requests', () => {
  
  beforeEach(() => {
    cy.visit("/");
    cy.intercept({
      method:"GET", 
      url: "/api/questions/random"
    }, {
    fixture: "questions.json",
    statusCode: 200
    }).as("getQuestions");
    });
  });

  it('should get questions properly', () => {
    cy.request('/api/questions/random')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0]).to.have.property('question');
        expect(response.body[0]).to.have.property('answers');
      
            });
        });

