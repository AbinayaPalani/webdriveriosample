describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const browserTitle = browser.getTitle()
        console.log('Browser title '+browserTitle)
        browser.click('li.navSearchWrapper.reactNavSearchWrapper');

        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})