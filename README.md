# SkillStack – Build Your Dev Portfolio Without Coding

## Project Overview
SkillStack is a beginner-friendly portfolio builder designed for students and junior developers who want to create a professional online presence without writing code from scratch.  
Users can log in, add projects, list skills, write a bio, and customize their portfolio with live preview and easy deployment.

This project is built using Next.js (App Router) with React, Tailwind CSS for styling, and React Context API for state management.

---

## Phase 1 Deliverables
- Setup of Next.js project with App Router (`app/` directory)  
- Created core components: `Navbar`, `Footer`, and `MainContent`  
- Implemented routing for Home, Dashboard, Editor, and Login pages  
- Used React state and props for component interactivity  
- Applied basic styling with Tailwind CSS ensuring responsive design  
- Shared layout (`layout.tsx`) with consistent navbar and footer across pages  

---

## Phase 2 Deliverables
- Implemented enhanced routing structure including dynamic routes (e.g., `/profile/[username]`)  
- Developed compound UI components using React’s composition model (`TabGroup`, `Tab`, `TabPanel`) integrated on the Dashboard page  
- Applied responsive and visually appealing styling with Tailwind CSS, including mobile hamburger menu  
- Used React Context and state hooks for dynamic content updates and user interaction (tab switching, menu toggling)  
- Maintained consistent theme and UI across pages  
- Organized project structure for clarity and scalability  

---

## Component and State Overview

- **Navbar & Footer:** Site-wide navigation and footer, with responsive design and hamburger menu using React state.  
- **MainContent:** Displays main text content, used on the Home page.  
- **Tabs (`TabGroup`, `Tab`, `TabPanel`):** Implements tabbed UI on Dashboard using React Context API to manage active tab state and enable dynamic content display.  
- **Routing:** Next.js App Router handles pages for Home (`/`), Dashboard (`/dashboard`), Editor (`/editor`), Login (`/login`), and dynamic user profiles (`/profile/[username]`).  
- **State Management:** React Context API and useState hooks are used for sharing active tab and mobile menu open states across components.

---

## Getting Started

### Prerequisites
- Node.js (version 16 or higher recommended)  
- npm or yarn package manager  

### Installation
```bash
git clone https://github.com/KayKay-H/SkillStack-Group-Project.git
cd skillstack-group-project
npm install
npm run dev
