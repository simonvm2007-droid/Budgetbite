# 🍔 BudgetBite – a spending coach for students

**Live app:** https://simonvm2007-droid.github.io/Budgetbite/

BudgetBite helps students spend less on food and drinks. You log what you buy in a few taps, and the app shows how much you can still spend today and gives personal tips to save money.

## Features

- **Quick add:** log a purchase in seconds with an amount, a category and an optional note
- **Daily budget:** your weekly budget is spread over the days left, so overspending one day lowers the next days, and saving raises them
- **Weekly overview:** a progress bar and a breakdown of spending per category
- **Smart tips:** the app looks at your last 7 days, spots habits (coffee, takeaway, snacks, nights out, canteen) and estimates how much each change could save per month
- **Product search:** search real products (like "Nutella 400 g") from the Open Food Facts database, pick one and enter what you paid. Recently picked products appear as quick buttons
- **Receipt scanning:** take a photo of a receipt and the app reads the products and prices (text recognition runs on your phone with Tesseract.js, nothing is uploaded)
- **Cheaper alternatives:** the app matches the products you buy against a list of brand products and suggests cheaper store-brand swaps, with an estimated saving per month
- **Installable:** add it to your home screen and it works offline like a normal app (PWA)
- **Example data:** try the app instantly without entering anything yourself
- Works on phone and laptop, with no account needed (data is saved in your browser)

## How it works

The smart tips come from a small rule engine written in JavaScript. Each rule checks the last 7 days of purchases (for example, "3 or more coffees bought" or "takeaway is more than 25% of spending"). When a rule matches, it estimates a monthly saving, and the app shows the three tips with the biggest savings.

## Built with

- HTML, CSS and JavaScript (no frameworks)
- localStorage to save data in the browser
- Tesseract.js for reading receipts
- The Open Food Facts API for product names (data under the Open Database License)
- A service worker and web app manifest for offline use and installing
- Hosted on GitHub Pages

## Planned features

- [x] Receipt scanning (text recognition from a photo)
- [ ] Barcode scanning with the Open Food Facts database
- [ ] Monthly comparison and saving streaks
- [x] Install on your phone as an app (PWA)
