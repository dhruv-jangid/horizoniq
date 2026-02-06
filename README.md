# HorizonIQ

> Know what's near, forecasts clear

A modern, responsive weather application built with TanStack Start and React that provides real-time weather information and forecasts with an elegant user interface.

## Features

- Real-time Weather Data: Current conditions including temperature, humidity, wind speed, and more
- Detailed Forecasts: Hourly and daily weather predictions
- Interactive Maps: Location-based weather visualization with Leaflet integration
- Responsive Design: Beautiful UI that works on all devices
- Data Visualization: Interactive charts for weather trends using Recharts
- Dark/Light Mode: Theme support for comfortable viewing
- Location Search: Find weather for any location worldwide
- Fast Performance: Built with TanStack Start and Vite for optimal speed
- Server Functions: Type-safe server-side functions with TanStack Start

## Tech Stack

- Frontend:
  - TanStack Start with React
  - TanStack Router for file-based routing
  - TanStack Query for data fetching and caching
  - TypeScript
  - Tailwind CSS for styling
  - Recharts for data visualization
  - Leaflet & React Leaflet for maps
  - Vite as the build tool
  - Nitro for server functions

- Development:
  - Bun as package manager
  - Turbo for monorepo management

# HorizonIQ

Know what's near — forecasts made clear.

A modern, responsive weather application built with TanStack Start and React. The app provides current conditions, hourly/daily forecasts, interactive maps, and data visualizations.

## Features

- Real-time weather data (temperature, humidity, wind, etc.)
- Hourly and daily forecasts
- Interactive maps using Leaflet
- Responsive UI with theme support (light/dark)
- Charts for trends (Recharts)
- Location search and autocomplete

## Tech Stack

- Frontend: TanStack Start, React, TypeScript, Vite
- Routing & data: TanStack Router, TanStack Query
- Maps: Leaflet & React-Leaflet
- UI & styling: Tailwind CSS, shadcn/components
- Charts: Recharts
- Server functions: Nitro (used by TanStack Start)

## Development

- Prerequisites: Node.js (>=18) and `npm` or `pnpm`
- This repository is a small monorepo; the main app lives in `apps/web`.

### Install & run (local development)

1. Clone the repository and enter the web app folder:

```bash
git clone https://github.com/dhruv-jangid/horizoniq.git
cd horizoniq/apps/web
```

2. Install dependencies:

```bash
npm install
# or: pnpm install
```

3. Create a `.env` file in `apps/web` with your OpenWeatherMap key:

```env
API_URL=https://api.openweathermap.org/data/2.5/
API_SEARCH_URL=https://api.openweathermap.org/geo/1.0/direct
API_KEY=your_openweathermap_api_key
```

4. Start the dev server:

```bash
npm run dev
# or: pnpm dev
```

The dev server URL is shown in the terminal (usually http://localhost:5173).

### Build & Preview

```bash
npm run build
npm run preview
# or with pnpm: pnpm build && pnpm preview
```

## Project Structure (high level)

```
horizoniq/
├── apps/
│   └── web/                 # Main application (Vite + TanStack Start)
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── routes/      # File-based routes
│       │   ├── server/      # Server utilities and functions
│       │   └── lib/         # Utilities
│       └── public/          # Static assets
├── turbo.json               # (optional) monorepo config
└── package.json             # workspace / tooling
```

## Notes

- The web app's scripts are defined in `apps/web/package.json` (dev/build/preview).
- If you prefer `bun`, some scripts may work with it, but the repo currently uses standard `npm`/`pnpm` scripts for Vite.

## Acknowledgements

- OpenWeatherMap for weather data
- TanStack for the framework libraries
- Tailwind CSS and shadcn for UI components
