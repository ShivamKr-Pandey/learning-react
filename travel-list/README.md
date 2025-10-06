![alt text](./assets/banner.png)

# Travel List

A small React app that helps plan trips by keeping a list of places to visit and packing items. Built with Create React App for learning and practice.

## How to use the app

- Add a travel destination or a packing item: use the form (usually labelled "Add item") to type the name and press Enter or click the Add button.
- The new item appears in the main list. Each item typically shows controls to mark it (e.g., checkbox), and a remove/delete button to delete it from the list.
- Use the Packing List view (component) to check off items as you pack them. Checked items indicate "packed".
- To remove an item you no longer need, click its delete/remove control.
- Notes: items are kept in the app state while the page is open. If you need persistence across browser sessions, let me know and I can add localStorage support.

## Quick start (cmd.exe)

1. Install dependencies

```
npm install
```

2. Start the dev server

```
npm start
```

Open http://localhost:3000 in your browser. The page will reload on edits. 3. Build for production

```
npm run build
```

## What this app contains

- A simple UI to add/remove travel items and packing list entries.
- Components wired in `src/components/`:
  - `App.js` — top-level app container and state orchestration
  - `Header.js` — title
  - `Form.js` — add items form
  - `Item.js` — a single travel item component
  - `PackingList.js` — packing checklist
  - `Footer.js` — footer

## Project structure

```
travel-list/
├─ public/
├─ assets/
├─ src/
│  ├─ components/
│  │  ├─ App.js
│  │  ├─ Header.js
│  │  ├─ Form.js
│  │  ├─ Item.js
│  │  ├─ PackingList.js
│  │  └─ Footer.js
│  ├─ index.js
│  └─ index.css
├─ package.json
└─ README.md
```

## This project is for learning purposes.
