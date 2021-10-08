import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});



test('I can find if you can place a piece in the first square', async () => {
    let td = await (await driver).findElement(By.id('cell-0'));
    await td.click();
})

test('I can find if you can place a piece in middle square', async () => {
    let td = await (await driver).findElement(By.id('cell-4'));
    await td.click();
})

test('I can find if you can place a piece in the bottom right square', async () => {
    let td = await (await driver).findElement(By.id('cell-8'));
    await td.click();
})
