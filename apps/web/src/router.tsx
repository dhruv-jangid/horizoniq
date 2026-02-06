import { createRouter } from "@tanstack/react-router";
import { ErrorComponent } from "./components/defaults/error";
import { NotFoundComponent } from "./components/defaults/not-found";
import { routeTree } from "./routeTree.gen";

const DEFAULT_STALE_GC_TIME = 1000 * 60 * 30;

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultStaleTime: DEFAULT_STALE_GC_TIME,
    defaultGcTime: DEFAULT_STALE_GC_TIME,
    defaultErrorComponent: (error) => <ErrorComponent error={error} />,
    defaultNotFoundComponent: NotFoundComponent,
  });

  return router;
};
