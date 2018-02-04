const puppeteer = require('puppeteer');

puppeteer.launch({
    devtools: true
}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.immobilienscout24.de/');
    await page.type('.oss-location-container input', 'Tübingen');
    await page.click('#oss-container button.oss-button.button-primary');
});