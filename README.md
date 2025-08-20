# React Transaction Dashboard

A responsive React.js dashboard application replicating the given Figma design, with transaction history, profile card, and dashboard components. The application fetches transaction data via API (with fallback to mock data due to SSL issues) and includes responsive layouts for desktop, tablet, and mobile views.

---

## Live Demo

[Live Deployment on Netlify](#)  <!-- Add your Netlify link here -->

---

## Features

- Fully responsive UI following Figma design.
- Sidebar, Navbar, and DashboardGrid components.
- Profile card with circular progress and checklist.
- Transaction history with status indicators: Pending, Success, Failed.
- Pagination support in transaction history.
- API integration using Axios with fallback to mock data.
- Context API for global state management.
- Hover, focus, and transition effects for buttons and links.
- Mobile, tablet, and desktop responsive layouts.

---

## Tech Stack

- **Frontend:** React.js 19, Vite
- **Routing:** React Router v7
- **Styling:** TailwindCSS
- **Icons:** React Icons, Lucide React
- **HTTP Requests:** Axios
- **State Management:** React Hooks + Context API

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd <your-repo-folder>
````

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```env
VITE_API_BASE_URL=<url>
VITE_API_TOKEN=<your-api-token>
VITE_SERVICE_ID=111
```

4. **Start development server**

```bash
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`) in your browser.

5. **Build for production**

```bash
npm run build
```

---

## Architecture & Approach

* **Component-based structure:**
  Sidebar, Navbar, DashboardGrid, ProfileCard, HistoryPage, etc., are modular components.

* **State management:**
  React Context handles global state for user info and transactions.

* **API handling:**
  Axios used to fetch transaction data.
  Fallback to Figma mock data due to SSL certificate issues on API endpoint.

* **Responsive design:**
  TailwindCSS breakpoints (`sm`, `md`, `lg`, `xl`) used to adapt layouts for mobile, tablet, and desktop.

* **Reusable components:**
  Row, StatusChip, TimerWithSpeed, SettleModal designed for reusability across pages.

---

## Time Spent

* **Total:** \~23–25 hours

  * UI replication from Figma: 12 hours
  * Responsive design adjustments: 6 hours
  * API integration & mock data fallback: 2 hours
  * Component refactoring & cleanup: 2–3 hours

---

## Known Limitations

* Real API integration not working due to SSL issues; mock data used for transactions.
* Pagination logic uses mock data; may need adjustment for real API with multiple pages.
* Some transition effects may slightly differ from Figma.
* Deployment currently tested on Netlify only.