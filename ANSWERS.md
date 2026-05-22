# ANSWERS

## 1. How to run

```bash
npm install
npm run dev
```

Open the localhost link shown in terminal.

## 2. Stack choice

I chose React with Vite because it is lightweight, fast, and simple for building a one-page interactive application. React made state management and API handling easier.

A worse choice would have been a full backend framework because this project only required frontend API consumption and a backend would add unnecessary complexity.

## 3. One real edge case

The app handles empty user input before making the API request.

File: `src/App.jsx`

Without this handling, the app would make invalid API calls and show confusing results or errors to users.

## 4. AI usage

I used ChatGPT to:
- Understand the assessment requirements
- Structure the React app
- Improve API error handling
- Generate README and ANSWERS documentation

I modified the AI-generated code by simplifying the UI and improving validation handling so the app remained beginner-friendly and easier to understand.

## 5. Honest gap

One thing that could be improved is the UI design and responsiveness for smaller mobile screens.

With another day, I would improve styling, add animations, and include comparison between multiple countries.
