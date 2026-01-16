import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Providers } from "@/components/providers/providers";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "HorizonIQ",
      },
      {
        name: "description",
        content: "Know whats near, forecasts clear",
      },
      {
        name: "application-name",
        content: "HorizonIQ",
      },
      {
        name: "author",
        content: "Dhruv Jangid",
      },
      {
        name: "creator",
        content: "Dhruv Jangid",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "author",
        href: "https://github.com/dhruv-jangid",
      },
      { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh overflow-x-hidden">
        <Providers>{children}</Providers>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
