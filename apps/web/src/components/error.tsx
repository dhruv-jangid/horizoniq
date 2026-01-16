import { type ErrorComponentProps, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const ErrorComponent = ({ error }: { error: ErrorComponentProps }) => {
  const router = useRouter();

  return (
    <div className="h-dvh text-2xl flex flex-col items-center justify-center gap-6 w-full mx-auto text-center pt-48 bg-accent">
      <div className="flex flex-col items-center gap-3">
        <p className="text-accent-foreground">
          We&apos;re sorry, but we couldn&apos;t complete your request at this time. We are looking
          into the issue and hope to have it resolved soon.
        </p>
        <Button onClick={() => router.invalidate()}>Refresh</Button>
      </div>
      <div className="mt-48 text-sm text-muted-foreground underline underline-offset-4 wrap-break-word line-clamp-1 max-w-xl">
        {error.error.message.trim() ?? "Something went wrong"}
      </div>
    </div>
  );
};
