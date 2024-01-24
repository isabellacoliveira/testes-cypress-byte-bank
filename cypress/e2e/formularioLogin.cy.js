describe('Formulário de Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it('Não deve permitir o email inválido', () => {
      cy.getByData('botao-login').click()
      cy.getByData('email-input').type('meilton@alura')
      cy.getByData('senha-input').type('123456')
      cy.getByData('botao-enviar').click()
      // verificar se o elemento existe na nossa tela 
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })
    // com only ele executa apenas aquele teste
    it.only('Não deve permitir um campo em branco', () => {
      cy.getByData('botao-login').click()
      cy.getByData('senha-input').type('123456')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    })

})