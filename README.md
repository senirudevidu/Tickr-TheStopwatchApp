# ⏱️ Tickr - React Stopwatch

A fully functional stopwatch application built with React to practice fundamental React concepts including component composition, state management, and React Hooks.

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)

## 🎯 Project Overview

This project was created as a hands-on practice exercise to learn and master core React concepts. The stopwatch features a clean, modern UI inspired by iOS design with full functionality including start, stop, reset, and lap tracking capabilities.

## 🚀 Features

- **Precision Timing**: High-precision stopwatch with millisecond accuracy (updates every 10ms)
- **Lap Functionality**: Record and display multiple lap times
- **Dynamic UI**: Button states change based on stopwatch status (Start/Stop, Reset/Lap)
- **Modern Design**: iOS-inspired interface with dynamic island and clean styling

## 🛠️ Technologies Used

- **React 19.2.0** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and animations
- **ESLint** - Code linting and quality

## 📚 React Concepts Practiced

### React Hooks

- **`useState`** - Managing component state (running status, elapsed time, lap times)
- **`useEffect`** - Handling side effects (timer intervals and cleanup)
- **`useRef`** - Persisting values across renders (interval ID, start time reference)
- **`createContext`** - Creating context for component communication (though not fully utilized in current implementation)

### Component Architecture

- **Functional Components** - All components built as functional components
- **Props Passing** - Data flow between parent and child components
- **Component Composition** - Breaking down UI into reusable components
- **Conditional Rendering** - Dynamic content based on application state

### Advanced Patterns

- **State Management** - Complex state interactions between timer, buttons, and laps
- **Event Handling** - User interactions and timer events
- **Array Operations** - Managing lap times with immutable updates
- **Time Formatting** - Converting milliseconds to readable time format

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── Clock.jsx        # Core stopwatch logic and display
├── Button.jsx       # Reusable button component
├── Lap.jsx          # Lap times display component
├── Notch.jsx        # iOS-style dynamic island component
├── App.css          # Application styles
├── Clock.css        # Stopwatch styling
├── Button.css       # Button styling
├── Lap.css          # Lap display styling
├── Notch.css        # Dynamic island styling
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## 🎮 How It Works

### Timer Logic

The stopwatch uses a combination of React hooks to achieve precise timing:

1. **State Management**: `useState` tracks running status and elapsed time
2. **Interval Management**: `useEffect` sets up and cleans up timer intervals
3. **Reference Tracking**: `useRef` stores the interval ID and start time for accurate calculations
4. **Time Calculation**: Uses `Date.now()` for precision timing instead of incrementing counters

### Component Interaction

- **Clock.jsx** serves as the main controller, managing all state and logic
- **Button.jsx** receives props to determine appearance and behavior
- **Lap.jsx** displays lap times in reverse chronological order
- **Notch.jsx** provides visual enhancement mimicking iOS design

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd stopWatch/Tickr
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Design Features

- **Dynamic Button States**: Buttons change functionality and appearance based on timer status
- **iOS-Inspired Design**: Clean, minimalist interface with rounded corners and subtle shadows
- **Color-Coded Actions**: Visual distinction between different button types (start/stop/reset/lap)
- **Lap History**: Chronological display of recorded lap times
- **Dynamic Island**: Modern iOS-style notch design element

## 🔧 Version Control

This project uses Git for version control and is hosted on GitHub, providing experience with:

- Repository management
- Commit history tracking
- Branch management
- Collaborative development workflows

## 📖 Key Learning Outcomes

- **React Fundamentals**: Solid understanding of React components, JSX, and virtual DOM
- **State Management**: Experience with complex state interactions and updates
- **Hook Mastery**: Practical application of multiple React hooks in a real project
- **Event Handling**: Managing user interactions and system events
- **Component Design**: Creating reusable, maintainable component architecture
- **Version Control**: Git workflow and GitHub integration

## 📄 License

This project is created for educational purposes as part of learning React development.

---

Built with ❤️ while learning React, hooks, and modern web development practices.
