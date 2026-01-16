# HorizonIQ

> Know what's near, forecasts clear

A modern, responsive weather application built with TanStack Start and React 19 that provides real-time weather information and forecasts with an elegant user interface.

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
  - TanStack Start 1.150.0 with React 19
  - TanStack Router for file-based routing
  - TanStack Query (React Query) for data fetching and caching
  - TypeScript for type safety
  - Tailwind CSS 4 for styling
  - Recharts for data visualization
  - Leaflet & React Leaflet for maps
  - Vite as the build tool
  - Nitro for server functions (Vercel preset)

- Development:
  - Bun as package manager
  - Turbo for monorepo management
  - Biome for linting and formatting

## Getting Started

### Prerequisites

- Bun (v1.3.6 or higher)
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

### Preview Production Build

Preview the production build locally:

```bash
cd apps/web
bun preview
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
- **Nitro**: Universal server framework (configured for Vercel deployment)
- **Vite**: Next-generation frontend build tool

## Screenshots

_[Add screenshots of your application here]_

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- OpenWeatherMap for weather data
- Hugeicons for beautiful icons
- Tailwind CSS for styling
- TanStack for the amazing framework ecosystem
