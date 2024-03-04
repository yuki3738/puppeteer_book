const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.goto('http://www.shuwasystem.co.jp/');

  await page.waitForSelector('#newsBlock');

  const news = await page.evaluate((selector) => {
    return document.querySelector(selector).innerHTML;
  }, '#newsBlock');

  console.log(news);

  await browser.close();
})();
