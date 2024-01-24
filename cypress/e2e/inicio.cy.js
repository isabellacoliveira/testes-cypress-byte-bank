// describe com descrição do teste, com callback 
describe('Pagina Inicial', () => {
  beforeEach(() => {
    // será executado antes de cada teste 
    cy.visit('http://localhost:3000/')
  })
  // o teste em si, descrição com nome passes 
  it('Deve renderizar o H1 com o texto correto', () => {
    // url que vem por default
    // obtem o elemento do DOM procurando pelo texto 
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})