import { Location01Icon, Sunrise, Sunset, TsunamiIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ClientOnly, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Suspense } from "react";
import { ForecastChart } from "@/components/forecast-chart";
import { MapComponent } from "@/components/map";
import { useLocation } from "@/components/providers/locationProvider";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { weatherQueryOptions } from "@/server/queries";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { location, setLocation } = useLocation();

  return (
    <div className="flex min-h-dvh w-full relative text-shadow-lg">
      <Image
        src="/images/temp.jpg"
        layout="fullWidth"
        className="object-cover absolute top-0 bottom-0 left-0 right-0 w-full h-full brightness-65 contrast-150"
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 justify-between min-h-dvh lg:h-dvh w-full z-50 p-4 lg:p-16 backdrop-blur-xs overflow-y-auto lg:overflow-hidden">
        <div className="w-full lg:w-1/4 h-64 lg:h-full shrink-0 backdrop-blur-md rounded-3xl lg:rounded-[calc(var(--radius)+36px)] border p-4 lg:p-6 flex flex-col justify-between order-2 lg:order-1">
          {location ? (
            <ClientOnly
              fallback={
                <Skeleton className="w-full lg:w-1/4 h-64 lg:h-full rounded-3xl lg:rounded-4xl" />
              }
            >
              <MapComponent location={location} setLocation={setLocation} />
            </ClientOnly>
          ) : (
            <Skeleton className="w-full h-full rounded-3xl lg:rounded-4xl" />
          )}
        </div>

        <div className="w-full lg:w-3/4 h-auto lg:h-full order-1 lg:order-2">
          {location ? (
            <Suspense fallback={<WeatherSkeleton />}>
              <WeatherDashboard latitude={location[0]} longitude={location[1]} />
            </Suspense>
          ) : (
            <WeatherSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}

const WeatherDashboard = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery(weatherQueryOptions({ latitude, longitude }));

  return (
    <div className="flex flex-col justify-between gap-8 lg:gap-16 w-full h-full">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
        <div className="pt-4 lg:pt-16 space-y-4 lg:space-y-8">
          <div className="inline-flex items-center gap-2 lg:gap-4 text-xl lg:text-3xl text-white/90 tracking-tight flex-wrap">
            <HugeiconsIcon
              icon={Location01Icon}
              strokeWidth={2}
              className="size-8 lg:size-12 shrink-0"
            />
            <h1 className="font-medium">{data.currentWeather.name || "Unknown"}</h1>
            <time className="font-light whitespace-nowrap">({data.currentWeather.dt})</time>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
            <div className="text-7xl lg:text-9xl font-bold tracking-tight">
              {data.currentWeather.main.temp}°
            </div>
            <div className="flex flex-row sm:flex-col gap-2">
              <div className="flex items-center gap-3 lg:gap-6 bg-black/20 backdrop-blur-2xl rounded-4xl border py-1.5 px-3 lg:px-2.5 text-sm lg:text-base">
                <HugeiconsIcon icon={Sunrise} className="size-5 lg:size-6" />
                {data.currentWeather.sys.sunrise}
              </div>
              <div className="flex items-center gap-3 lg:gap-6 bg-black/20 backdrop-blur-2xl rounded-4xl border py-1.5 px-3 lg:px-2.5 text-sm lg:text-base">
                <HugeiconsIcon icon={Sunset} className="size-5 lg:size-6" />
                {data.currentWeather.sys.sunset}
              </div>
            </div>
          </div>

          <div className="text-4xl lg:text-7xl text-white/80 capitalize">
            {data.currentWeather.weather[0].main}
          </div>
        </div>

        <div className="flex lg:inline-flex justify-between lg:justify-center items-start gap-4 lg:gap-8 w-full lg:w-auto">
          <Search />
          <Button
            size="icon-lg"
            variant="outline"
            onClick={() => navigate({ to: "/", replace: true })}
          >
            <HugeiconsIcon icon={TsunamiIcon} strokeWidth={2} color="#fff" className="size-7" />
          </Button>
        </div>
      </div>

      <div className="w-full h-64 lg:h-1/2 overflow-hidden pb-0 lg:pb-6 text-black shrink-0">
        <ForecastChart chartData={data.forecastWeather.list} />
      </div>
    </div>
  );
};

const WeatherSkeleton = () => (
  <div className="flex flex-col justify-between gap-8 lg:gap-16 w-full h-full">
    <div className="pt-4 lg:pt-16 space-y-8">
      <Skeleton className="h-8 lg:h-12 w-48 lg:w-64" />
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="h-24 lg:h-32 w-32 lg:w-48" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
    <Skeleton className="w-full h-64 lg:h-1/2" />
  </div>
);
