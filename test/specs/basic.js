describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io')

        const title = await browser.getTitle()
        console.log("***************************")
        console.log(title)
        console.log("***************************")

       // await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})