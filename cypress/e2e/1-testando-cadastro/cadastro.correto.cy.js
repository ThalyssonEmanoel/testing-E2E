describe('Testes finance', () => {
    beforeEach(() => {
      cy.visit('https://dev-finance.netlify.app/')
    })

    it('Deve realizar cadastro de entradas e saidas com sucesso', () => {
        cy.get('a').contains('Nova Transação').click(),
        cy.get('#description').type('Comida')
        cy.get('#amount').type('100')
        cy.get('#date').type('2012-06-12')
        cy.get('button').contains('Salvar').click()
        cy.get('p#incomeDisplay').contains('100,00')
        cy.get('a').contains('Nova Transação').click(),
        cy.get('#description').type('Salario')
        cy.get('#amount').type('-1000')
        cy.get('#date').type('2012-06-12')
        cy.get('button').contains('Salvar').click()
        // cy.get('p#expenseDisplay').contains(/-R\$ 1\.000,00/)Arrumar essa parte do código
    })
})