describe('Testando múltiplas páginas', () => {
  // podemos passar mais um parâmetro que especifica o browser 
  it('Deve conseguir acessar a página de cartões', {browser: 'edge'}, () => {
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    // ver se estamos no pathname corretor, escrever o pathname que temos que estar (home)
    cy.location('pathname').should('eq', '/home');

    cy.getByData('app-home').find('a').eq(1).click();
    cy.getByData('titulo-cartoes')
      .should('exist')
      .and('have.text', 'Meus cartões');

    cy.location('pathname').should('eq', '/home/cartoes');
  });
});
