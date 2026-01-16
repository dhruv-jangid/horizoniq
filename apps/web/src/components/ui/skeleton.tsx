import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted/20 rounded-xl animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
