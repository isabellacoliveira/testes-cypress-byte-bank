describe('Jornadas de usuário', () => {
    it('Permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça logout', () => {
        cy.visit('/');
        
        // LOGIN 
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('neilton@alura.com');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        
        cy.location('pathname').should('eq', '/home');
        
        // TRANSAÇÃO 
        cy.getByData('select-opcoes').select('Transferência');
        // campo do valor 
        cy.getByData('form-input').select('80');
        // botão de realizar transação 
        cy.getByData('realiza-transacao').click();
        
        // verificar se a transação foi realizada 
        // encontrar elemento LI , encontrar a ultima transação que fiz 
        // vai conter o texto que digitarmos 
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');
        
        // SAIR 
        cy.getByData('botao-sair').click();
        cy.location('pathname').should('eq', '/');
    })
    // alt  + z = quebrar linha 
});
  