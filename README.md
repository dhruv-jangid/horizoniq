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
  - Biome for linting and formatting

## Getting Started

### Prerequisites

- Bun
- OpenWeatherMap API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/horizoniq.git
   cd horizoniq
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:

   Create a `.env` file in the `apps/web` directory with the following variables:

   ```bash
   API_URL=https://api.openweathermap.org/data/2.5/
   API_SEARCH_URL=https://api.openweathermap.org/geo/1.0/direct
   API_KEY=your_openweathermap_api_key
   ```

## Usage

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:

```bash
bun build
```

## Project Structure

```
horizoniq/
├── apps/
│   └── web/                 # Main application
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── routes/      # File-based routes (TanStack Router)
│       │   ├── server/      # Server functions
│       │   └── lib/         # Utility functions
│       └── public/          # Static assets
└── turbo.json               # Turbo monorepo configuration
```

## Key Technologies

- **TanStack Start**: Full-stack React framework with server functions
- **TanStack Router**: Type-safe routing with file-based route generation
- **TanStack Query**: Powerful data synchronization for React
- **Nitro**: Universal server framework
- **Vite**: Next-generation frontend build tool

## Acknowledgements

- OpenWeatherMap for weather data
- Hugeicons for beautiful icons
- Tailwind CSS for styling
- TanStack for the amazing framework ecosystem
