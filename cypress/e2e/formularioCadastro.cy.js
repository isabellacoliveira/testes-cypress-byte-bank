describe('Formulário Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
      cy.getByData('botao-cadastro').click()
      cy.getByData('nome-input').type('Isa Oliveira')
      cy.getByData('email-input').type('isa@gmail.com')
      cy.getByData('senha-input').type('1123123')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'O usuário foi cadastrado com sucesso!')
    })
  })