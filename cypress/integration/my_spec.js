/// <reference types='cypress' />



describe('Home Page', () => {
    it('Verifies Header Links', () => {
                
        cy.visit('')
        
        let links = ['pro', 'challenges', 'solutions', 'resources']

        cy.get('#menu a:not(li.mobile > a)').each((a, i) => {
            cy.get(a)
            .should('have.attr', 'href')
            .and('include', links[i])
        })

    })
})


describe('Challenge Page', () => {
    it('Verifies that design buttons are working correctly', () => {
        
        // Gets into the first challenge
        cy.visit('/challenges')
        cy.get('li.PreviewItem__StyledItem-wu6lmx-0 a').eq(0)
        .click()
        
        // Gets Design and buttons
        cy.get('div.preview img').as('img')
        cy.get('ul.preview-tabs li button').as('buttons')


        // Checks that images change by clicking each button
        cy.get('@img')
        
        .then(img => {
            let old = img.prop('src')
            cy.get('@buttons').eq(1).click()
            cy.get('@img')
            
            .then(img => {
                expect(img.prop('src')).to.not.eq(old)
                old = img.prop('src')
                cy.get('@buttons').eq(2).click()
                cy.get('@img')
            
                .then(img => {
                    expect(img.prop('src')).to.not.eq(old)

                })
            })
        })


    })
})


describe('FAQs Section', () => {
    it('Verifies +/- buttons work fine', () => {
        cy.visit('/challenges')
        cy.get('li.PreviewItem__StyledItem-wu6lmx-0 a').eq(0)
        .click()

        // Get the first question and its extendable text
        cy.get('.questions button').eq(0).as('question')        
        cy.get('div.Question__StyledItem-qkfu30-0 p:only-of-type').eq(0).parent().as('text')

        // Start checking
        cy.wait(200)
        
        cy.get('@text').should('have.class', 'is-hidden')
        
        cy.get('@question').click();
        cy.get('@text').should('have.class', 'is-active')
        
        cy.get('@question').click();
        cy.get('@text').should('have.class', 'is-hidden')

    })
})