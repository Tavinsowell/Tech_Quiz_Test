import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
  it('should render correctly', () => {
    cy.mount(<Quiz />)
    cy.get('button').should('have.text', 'Start Quiz')


  
  })
  
})