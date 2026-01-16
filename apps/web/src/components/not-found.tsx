import { useRouter } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Button } from "@/components/ui/button";

export const NotFoundComponent = () => {
  const router = useRouter();

  return (
    <div className="h-dvh flex flex-col items-center justify-center text-center bg-accent">
      <Image src="/logo.svg" width={120} height={120} alt="logo" className="mb-4" />
      <h2 className="text-4xl font-bold mb-2 text-accent-foreground">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-4">
        Sorry, couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button variant="outline" onClick={() => router.navigate({ to: "/" })}>
        Return Home
      </Button>
    </div>
  );
};
