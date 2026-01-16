import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_LOCATION: [number, number] = [51.505, -0.09];
const STORAGE_KEY = "horizoniq-location";

type LocationContextType = {
  location: [number, number] | null;
  setLocation: (location: [number, number]) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocationState] = useState<[number, number] | null>(null);

  useEffect(() => {
    try {
      const savedItem = localStorage.getItem(STORAGE_KEY);
      if (savedItem) {
        const parsed = JSON.parse(savedItem);
        if (Array.isArray(parsed) && parsed.length === 2) {
          setLocationState(parsed as [number, number]);
          return;
        }
      }
    } catch (e) {
      console.warn("Failed to parse location", e);
    }

    setLocationState(DEFAULT_LOCATION);
  }, []);

  const setLocation = (newLocation: [number, number]) => {
    setLocationState(newLocation);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation));
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
