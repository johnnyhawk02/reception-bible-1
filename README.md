# Reception Bible

## Overview
The Reception Bible is a responsive web application designed for front-desk staff at UK leisure centres. It serves as a digital reference guide for all reception tasks and procedures, replacing traditional printed manuals. The application is optimized for both desktop and mobile use, providing quick access to essential information.

## Features
- Clear and navigable sections for reception tasks, including:
  - Opening procedures
  - Dos and don'ts
  - Membership handling
  - Fitness classes
  - Till checks
  - End-of-day procedures
  - Frequently asked questions
- Fast-loading and user-friendly interface
- Fully responsive design using Tailwind CSS v3
- Simple text filter for content on each page

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS v3**: A utility-first CSS framework for styling.
- **react-router-dom**: A library for routing in React applications.

## Project Structure
```
reception-bible
├── src
│   ├── components
│   │   ├── Layout.js
│   │   ├── Navigation.js
│   │   └── SearchBar.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── OpeningProcedure.js
│   │   ├── DosAndDonts.js
│   │   ├── Memberships.js
│   │   ├── FitnessClasses.js
│   │   ├── TillChecks.js
│   │   ├── EndOfDay.js
│   │   └── FAQs.js
│   ├── content
│   │   ├── openingProcedure.js
│   │   ├── dosAndDonts.js
│   │   ├── memberships.js
│   │   ├── fitnessClasses.js
│   │   ├── tillChecks.js
│   │   ├── endOfDay.js
│   │   └── faqs.js
│   ├── App.js
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/reception-bible.git
   ```
2. Navigate to the project directory:
   ```
   cd reception-bible
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Navigate through the application using the top navigation bar.
- Use the search bar on each page to filter the content based on keywords.
- Content can be manually edited in the `src/content` directory.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.