# I Am Chef 🍳

A modern, mobile-first web application that helps you discover recipes based on ingredients you have at home or by searching for specific dishes. Built with React and TypeScript, featuring an intuitive swipe-based interface inspired by modern content discovery apps.

## 🎨 Design

The UI/UX was first designed in Figma following **Atomic Design** principles, ensuring a modular and scalable component structure:

👉 **[View Figma Design](https://www.figma.com/design/Pf9b7QRhwH66NxmlSLu112/I-am-Chef?node-id=31-3&t=THujb4UBYAUUdnXM-1)**

The atomic design approach enabled:
- **Atoms**: Basic UI elements (buttons, inputs, badges)
- **Molecules**: Simple component combinations (search bar with autocomplete, ingredient badge groups)
- **Organisms**: Complex components (recipe cards, detail modals, carousels)
- **Templates**: Page layouts with consistent structure
- **Pages**: Final implementations with real content

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Architecture](#-architecture)
- [Development](#-development)
- [Scripts](#-scripts)
- [License](#-license)

## ✨ Features

### Core Features
- **Smart Recipe Search**: Search recipes by name or by ingredients you have available
- **Intelligent Autocomplete**: Get suggestions as you type in the search bar
- **Ingredient Badge System**: Select multiple ingredients with an intuitive badge interface
- **Full-Screen Recipe Cards**: Immersive swipe-based interface (TikTok-style) to browse through recipes
- **Smart Sorting**: Results automatically sorted by ingredient compatibility and preparation time
- **Detailed Recipe Information**: Complete details including:
  - Preparation and cooking time
  - Dietary information
  - Cost estimation
  - Health score
  - Servings
  - Dish type
  - Allergens
  - Sustainability score
  - Nutritional information

### User Experience
- **Mobile-First Design**: Optimized for mobile devices with touch-friendly interactions
- **Persistent Context**: Top bar keeps track of search criteria and result count
- **Video Tutorials**: Integrated video instructions for recipes
- **Missing Ingredients**: Clear indication of what you're missing to make a recipe
- **Protected Routes**: Secure API key management

## 🛠 Tech Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Router**: React Router 7.9.6
- **State Management**: Zustand 5.0.8
- **Styling**: CSS Modules
- **Package Manager**: pnpm
- **Linting**: ESLint 9.x

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (install globally: `npm install -g pnpm`)
- Spoonacular API Key (get one at [spoonacular.com/food-api](https://spoonacular.com/food-api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LorenzoParolini/iamchef-parolini.git
cd iamchef-parolini
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser at `http://localhost:5173`

### Configuration

On first launch, you'll be prompted to enter your Spoonacular API key. The app uses this key to fetch recipe data. Your key is stored locally in your browser's localStorage.

## 📁 Project Structure

```
iamchef-parolini/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── badges/          # Ingredient badge components
│   │   ├── details-modal/   # Recipe details modal
│   │   ├── recipe-carousel/ # Swipeable recipe cards
│   │   ├── search-bar/      # Search input with autocomplete
│   │   └── ...
│   ├── hooks/               # Custom React hooks
│   │   ├── useApi.ts        # API integration hook
│   │   ├── useDebounce.ts   # Debounce utility hook
│   │   ├── useIngredients.ts # Ingredient management
│   │   ├── useRecipeSearch.ts # Recipe search logic
│   │   └── useRecipeDetails.ts # Recipe details fetching
│   ├── pages/               # Page components
│   │   ├── discover-recipes/ # Main discovery page
│   │   ├── recipe-details/   # Recipe detail view
│   │   ├── search-page/      # Search interface
│   │   └── set-api-page/     # API configuration
│   ├── layout/              # Layout components
│   │   ├── header/          # App header
│   │   ├── footer/          # App footer
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── store/               # Zustand state management
│   │   └── useAPIStore.ts   # API key store
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   │   └── recipe-details-utils/ # Recipe data processing
│   ├── App.tsx              # Main app component
│   ├── router.tsx           # Route configuration
│   └── main.tsx             # App entry point
├── bin/                     # Build utilities
├── notes/                   # Documentation and guides
└── public/                  # Static assets
```

## 📖 Usage

### Searching by Recipe Name
1. Type a dish name in the search bar (e.g., "pasta carbonara")
2. Select from autocomplete suggestions or press Enter
3. Swipe through the results to find your recipe
4. Tap on a card to see full details

### Searching by Ingredients
1. Start typing an ingredient in the search bar
2. Select it from the suggestions - it will appear as a badge
3. Add more ingredients as badges
4. Click the "Ready" button below the badges
5. Browse recipes sorted by how many of your ingredients they use

### Viewing Recipe Details
- **Swipe right/left**: Navigate between recipe cards
- **Tap on card**: Open detailed view with instructions
- **Video button**: Watch tutorial video
- **Missing ingredients**: Tap to see what you need to buy

## 🏗 Architecture

### Design Patterns
The application follows modern React patterns and best practices:

- **Custom Hooks**: Business logic separated into reusable hooks
- **Component Composition**: Modular, composable UI components
- **State Management**: Zustand for global state (API key)
- **Protected Routes**: API key validation before accessing main features
- **Type Safety**: Full TypeScript coverage for type safety

### Key Hooks

- **useApi**: Centralized API communication layer
- **useRecipeSearch**: Handles recipe search logic and state
- **useIngredients**: Manages ingredient selection and badge system
- **useRecipeDetails**: Fetches and processes detailed recipe information
- **useDebounce**: Optimizes search performance
- **usePageNavigation**: Handles carousel navigation

## 💻 Development

### Code Style
- ESLint configuration enforces consistent code style
- React 19 and TypeScript best practices
- CSS Modules for scoped styling

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts Vite dev server with hot reload |
| `pnpm build` | Creates optimized production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Lint code with ESLint |

## 🗺 Roadmap

### Completed
- ✅ API integration with Spoonacular
- ✅ Recipe search by name and ingredients
- ✅ Autocomplete functionality
- ✅ Badge system for ingredient selection
- ✅ Full-screen card interface with swipe
- ✅ Recipe details page
- ✅ Sorting by compatibility and time
- ✅ Protected routes for API management

### Future Enhancements
- 🔄 Shopping list feature
- 🔄 Calorie tracking per ingredient
- 🔄 Advanced allergen filtering
- 🔄 Sustainability indicators
- 🔄 User favorites and recipe collections
- 🔄 Offline mode support

## 📄 License

This project was developed as part of a front-end development course.

---

**Author**: Lorenzo Parolini  
**Repository**: [github.com/LorenzoParolini/iamchef-parolini](https://github.com/LorenzoParolini/iamchef-parolini)  
**Year**: 2025