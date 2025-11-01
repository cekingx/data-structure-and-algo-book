# Data Structures & Algorithms Playground

A multi-language implementation playground for learning from the **Common Sense Guide to Data Structures and Algorithms** book. This repository provides parallel implementations in **Node.js/TypeScript** and **Gleam** to demonstrate algorithms and data structures across different programming paradigms.

## Project Structure

```
data-structure-and-algo-book/
├── node/                    # Node.js/TypeScript implementations
│   ├── src/
│   │   └── chapter-2/      # Search algorithms
│   ├── test/
│   │   └── chapter-2/      # Vitest test files
│   ├── package.json
│   └── tsconfig.json
│
├── dsa_playground/          # Gleam implementations
│   ├── src/
│   │   └── dsa_playground.gleam
│   ├── test/
│   │   └── dsa_playground_test.gleam
│   ├── gleam.toml
│   └── manifest.toml
│
└── README.md               # This file
```

## Node.js/TypeScript Implementation

### Tech Stack
- **Language**: TypeScript 5.8.3
- **Test Framework**: Vitest 3.1.1
- **Build Tool**: Vite 6.2.6
- **Module System**: CommonJS
- **Target**: ES2016

### Setup

```bash
cd node
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file (default)
npm start
```

### Test Files
- Located in `test/chapter-X/` (organized by chapter)
- Pattern: `*.spec.ts`
- Framework: Vitest with `describe/it` structure

## Gleam Implementation

### Tech Stack
- **Language**: Gleam
- **Test Framework**: gleeunit
- **Dependencies**: gleam_stdlib (>= 0.44.0)

### Prerequisites

Install Gleam following the instructions at [gleam.run](https://gleam.run/getting-started/installing/)

### Setup

```bash
cd dsa_playground
gleam build
```

### Running Tests

```bash
# Run all tests
gleam test

# Run the project
gleam run
```

### Project Structure
- Main module: `src/dsa_playground.gleam`
- Test module: `test/dsa_playground_test.gleam`
- Test pattern: Functions ending with `_test`

## Chapter Organization

Implementations are organized by chapter, following the book structure. Each chapter will contain parallel implementations in both Node.js/TypeScript and Gleam.

## Development Workflow

### Adding New Algorithms

**For Node.js/TypeScript:**
1. Add implementation to `node/src/chapter-X/`
2. Create test file in `node/test/chapter-X/`
3. Run tests with `npm test`

**For Gleam:**
1. Add implementation to `dsa_playground/src/`
2. Add tests to `dsa_playground/test/`
3. Run tests with `gleam test`

### Testing Strategy
- Each algorithm has comprehensive test coverage in both languages
- Tests include edge cases, boundary conditions, and typical scenarios
- Performance characteristics are documented and verified

## Why Two Languages?

This dual-language approach provides:
- **Different Paradigms**: Imperative/OOP (TypeScript) vs Functional (Gleam)
- **Type Systems**: Compare gradual typing vs strong static typing
- **Learning**: Understand algorithms from multiple perspectives
- **Performance**: Compare runtime characteristics across platforms

## Contributing

This is a personal learning repository. Feel free to fork and adapt for your own learning journey.

## Author

**Dirga Yasa**

## License

ISC
