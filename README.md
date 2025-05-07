# 📊 Market Pulse Dashboard (Angular)

A responsive, full-view Angular dashboard that lets you switch between different live market widgets including **Gold**, **Silver**, **Bitcoin**, and **GBP/JPY** using a smooth carousel-like navigation. Currently will show **Bitcoin data only**

---

## 🚀 Features

- 📉 Live graph updates for Bitcoin (Google Charts)
- 🪙 Real-time price display
- 🚨 Alert messages when price fluctuates significantly
- 📱 Responsive layout
- ⏭️ Carousel-based navigation using Previous / Next buttons
- 💡 Elegant header and footer
- 🎨 Clean UI with themed styling

---

## 🛠️ Tech Stack

- Angular 17+
- TypeScript
- Google Charts
- Angular Material (for cards)
- HTML / CSS

---

## 📦 Project Structure

src/
├── app/
│ ├── app.component.ts # Handles carousel logic
│ ├── bitcoin/ # Bitcoin live price component
│ ├── gold/ # Gold price view
│ ├── silver/ # Silver price view
│ ├── gbpjpy/ # GBP/JPY price view
│ └── services/
│ └── market-data.service.ts # API integration

![Screenshot (190)](https://github.com/user-attachments/assets/ae74bf22-90fa-4291-b044-fc39307072d7)

## 🧪 How to Run

```bash
npm install
ng serve```
Then open: http://localhost:4200

✨ Controls
⬅️ Previous — Go to previous component

➡️ Next — Go to next component

📌 Notes
Bitcoin graph updates every 10 seconds

Price alerts shown for changes > 5%

Adjustments made for full graph visibility without content overlap

🧑‍💻 Developer
Created with ❤️ by Sharan.
