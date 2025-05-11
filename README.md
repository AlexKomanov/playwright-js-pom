# playwright-js-pom

## About

This repository contains a Playwright automation framework using JavaScript and following the Page Object Model (POM) pattern.

## Setup Instructions

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- Git

### Clone Repository

```bash
git clone https://github.com/yourusername/playwright-js-pom-part.git
cd playwright-js-pom-part
```

### Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

## View Test Report

After the tests have completed, view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

- `pages/` - Page Object Model classes
- `tests/` - Test files
- `playwright.config.js` - Playwright configuration
