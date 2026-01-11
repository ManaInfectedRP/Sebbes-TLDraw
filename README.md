# Sebbes-TLDraw

A local tldraw whiteboard application with persistent local storage. All your drawings and whiteboards are stored locally on your PC using browser's IndexedDB.

## Features

- 🎨 Full-featured whiteboard using tldraw
- 💾 Automatic local storage - your drawings persist between sessions
- 🖼️ Support for images and assets stored locally
- 🚀 Fast and responsive React + Vite setup

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository or download the source code
2. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

This will start the application at `http://localhost:3000` (the browser will open automatically).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory. You can preview the production build with:

```bash
npm run preview
```

## How It Works

The application uses:
- **tldraw**: A powerful, open-source whiteboard library
- **IndexedDB**: Browser's local database for persistent storage
- **Vite**: Fast build tool and development server
- **React**: UI framework

All your drawings are automatically saved to your browser's local storage. No internet connection or external server is required after the initial setup.

## Storage

Your drawings are stored locally in your browser's IndexedDB. The data persists even after closing the browser. To clear your drawings, you can:
1. Use the tldraw UI to delete or clear the canvas
2. Clear your browser's storage/cache for localhost:3000

## License

MIT