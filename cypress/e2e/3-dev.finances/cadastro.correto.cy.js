describe('Testes finance', () => {
  //Esse it abre o site
  it('Open the site web', () => {cy.visit('https://dev-finance.netlify.app/')}),
  it('Deve realizar cadastro de entradas e saidas com sucesso', () => {
    //Deve clicar no botão nova transação <a href="#" class="button new" onclick="Modal.open()">+ Nova Transação</a>
    cy.click('a.button.new')
  }),
   it('Deve realizar remover de entradas e saidas com sucesso', () => {
    //Colocar testes aqui
  })  
})
