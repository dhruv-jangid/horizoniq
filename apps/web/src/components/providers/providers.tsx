import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationProvider } from "./locationProvider";

const STALE_GC_TIME = 3600 * 1000;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_GC_TIME,
      gcTime: STALE_GC_TIME,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocationProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </LocationProvider>
  );
};
