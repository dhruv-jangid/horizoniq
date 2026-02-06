import { queryOptions } from "@tanstack/react-query";
import { getWeather } from "./get-weather";
import { searchLocation } from "./search-location";

const REFETCH_INTERVAL = 1000 * 60 * 5;

export const weatherQueryOptions = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) =>
  queryOptions({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeather({ data: { latitude, longitude } }),
    refetchInterval: REFETCH_INTERVAL,
    placeholderData: (prevData) => prevData,
  });

export const searchLocationQueryOptions = ({ query }: { query: string }) =>
  queryOptions({
    queryKey: ["searchLocation", query],
    queryFn: () => searchLocation({ data: { query } }),
    placeholderData: (prevData) => prevData,
    enabled: query.trim().length > 3,
  });
