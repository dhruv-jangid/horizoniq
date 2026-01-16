import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { ErrorComponent } from "./components/error";
import { NotFoundComponent } from "./components/not-found";
import { routeTree } from "./routeTree.gen";

const DEFAULT_STALE_GC_TIME = 1000 * 60 * 30;

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultStaleTime: DEFAULT_STALE_GC_TIME,
    defaultGcTime: DEFAULT_STALE_GC_TIME,
    defaultErrorComponent: (error) => <ErrorComponent error={error} />,
    defaultNotFoundComponent: NotFoundComponent,
  });

  return router;
};
