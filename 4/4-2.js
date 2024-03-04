const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800,
  });
  await page.goto('http://www.shuwasystem.co.jp/');
  await page.waitForSelector('#hnaviSearchWord');
  await page.type('#hnaviSearchWord', 'Puppeteer');
  await browser.close();
})();
