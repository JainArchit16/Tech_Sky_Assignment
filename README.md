# Sales Dashboard – Frontend Assignment

## Overview

This project is a frontend-only Sales Dashboard built using **Next.js (App Router)** and **Tailwind CSS**.
The goal of the assignment is to demonstrate frontend structure, component modularity, UI behavior, and role-based access handling without relying on backend APIs.

All data and authentication are mocked on the client side using context and local state.

---

## Features

* Modern dashboard layout with sidebar navigation
* Role-based access control (Admin vs Agent)
* Admin-only Settings page with restricted access handling
* Clean, responsive UI using Tailwind CSS
* Modular and reusable component structure
* Mock authentication using React Context
* No backend dependency (as per assignment instructions)

---

## Tech Stack

* **Next.js** (App Router, Client Components)
* **React**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## Project Structure

```
.
├── app/
│   ├── page.jsx              # Dashboard page
│   ├── leads/page.jsx        # Leads page
│   ├── calls/page.jsx        # Call Logs page
│   ├── settings/page.jsx     # Settings (Admin-only)
│   └── layout.jsx            # App layout
│
├── components/
│   └── Sidebar.jsx           # Sidebar navigation
│
├── context/
│   └── AuthContext.jsx       # Mock authentication & role handling
│
├── services/
│   └── mockData.js           # Mocked data layer
│
├── utils/
│   └── helpers.js            # Utility functions
│
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Role-Based Access Logic

The application supports two conceptual roles:

* **Admin**
* **Agent**

Role handling is implemented using a global `AuthContext`.

### Admin

* Can access the Settings page
* Can view User Management, System Preferences, and Audit Logs sections

### Agent

* Cannot access admin-only settings
* Sees a clear “Access Restricted” message instead of hidden content

This ensures UI-level access control without backend logic, as required by the assignment.

---

## Settings Page Behavior

* If `user.role === "admin"`
  → Admin settings content is rendered
* If `user.role !== "admin"`
  → Access restricted UI is shown

No sensitive content is rendered for agents.

---

## Tailwind CSS Usage

* Utility-first styling for fast iteration
* Responsive spacing and layout
* Consistent typography and color usage
* Minimal custom CSS (Tailwind only)

Tailwind is configured to scan all project files using:

```js
content: ["./**/*.{js,jsx}"]
```

---

## Mock Authentication

Authentication is simulated using React Context:

* User object contains role information
* Role can be switched for testing
* No external auth provider is used

This keeps the project aligned with the assignment requirement of **no backend APIs**.

---

## How to Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open in browser:

   ```
   http://localhost:3000
   ```

---

## Assignment Notes

* Backend APIs are intentionally not used
* All data is mocked locally
* Focus is on:

  * Component structure
  * UI behavior
  * Code readability
  * Maintainability

---

## Possible Improvements

If this were a production application:

* Add backend authentication and authorization
* Protect routes at the middleware level
* Persist user roles securely
* Add form handling and validation
* Improve accessibility (ARIA, keyboard navigation)

---
