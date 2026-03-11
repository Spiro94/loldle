# League Wordle

League Wordle is a fan-made League of Legends word puzzle inspired by Wordle. Players guess League-related words (champions, roles, objectives, and game concepts) in up to 6 attempts, with color feedback after each guess.

## Goal

Solve the hidden League term in as few guesses as possible. After a win, players can save their score and see top results on the leaderboard.

## Features

- Wordle-style gameplay with 6 attempts per round.
- League of Legends dictionary with hints for each answer.
- Select puzzle length (4, 5, 6, or 7 letters).
- Tile feedback states:
  - Correct letter and position.
  - Correct letter, wrong position.
  - Letter not in answer.
- Hint reveal button.
- Success and failure modals.
- Validation modal for incomplete guesses.
- Local leaderboard using Zustand + localStorage.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Zustand
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## How It Works

1. A random answer is selected from the League dictionary based on the chosen word length.
2. The player enters one letter per tile and submits with Enter.
3. The guess is evaluated with Wordle-like matching rules.
4. The round ends on:
   - Success: all letters are correct.
   - Failure: 6 guesses used.
5. On success, the player can store a username and guess count on the local leaderboard.

## Notes

- Scores are persisted in browser localStorage.
- This is an unofficial fan project and is not affiliated with Riot Games.
