import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationProvider } from "./locationProvider";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocationProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </LocationProvider>
  );
};
