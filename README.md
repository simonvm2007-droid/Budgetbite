# 🍔 BudgetBite – a spending coach for students

**Live app:** https://simonvm2007-droid.github.io/budgetbite

BudgetBite helps students spend less on food and drinks. You log what you buy in a few taps, and the app shows how much you can still spend today and gives personal tips to save money.

## Features

- **Quick add:** log a purchase in seconds with an amount, a category and an optional note
- **Daily budget:** your weekly budget is spread over the days left, so overspending one day lowers the next days, and saving raises them
- **Weekly overview:** a progress bar and a breakdown of spending per category
- **Smart tips:** the app looks at your last 7 days, spots habits (coffee, takeaway, snacks, nights out, canteen) and estimates how much each change could save per month
- **Example data:** try the app instantly without entering anything yourself
- Works on phone and laptop, with no account needed (data is saved in your browser)

## How it works

The smart tips come from a small rule engine written in JavaScript. Each rule checks the last 7 days of purchases (for example, "3 or more coffees bought" or "takeaway is more than 25% of spending"). When a rule matches, it estimates a monthly saving, and the app shows the three tips with the biggest savings.

## Built with

- HTML, CSS and JavaScript (no frameworks)
- localStorage to save data in the browser
- Hosted on GitHub Pages

## Planned features

- [ ] Receipt scanning (text recognition from a photo)
- [ ] Barcode scanning with the Open Food Facts database
- [ ] Monthly comparison and saving streaks
- [ ] Install on your phone as an app (PWA)
