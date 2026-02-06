import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { capFirstLetters } from "@/lib/utils";

export const getWeather = createServerFn({ method: "GET" })
  .inputValidator(z.object({ latitude: z.number(), longitude: z.number() }))
  .handler(async ({ data }) => {
    const { latitude, longitude } = data;

    if (!latitude || !longitude) {
      throw new Error("Latitude & Longitude are required");
    }

    try {
      const currentWeather = await (
        await fetch(
          `${process.env.API_URL}weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`,
        )
      ).json();

      currentWeather.weather[0].description = capFirstLetters(
        currentWeather.weather[0].description,
      );
      currentWeather.visibility = currentWeather.visibility / 1000;
      currentWeather.dt = new Date(
        (currentWeather.dt + currentWeather.timezone) * 1000,
      ).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
      });
      currentWeather.sys.sunrise = new Date(
        (currentWeather.sys.sunrise + currentWeather.timezone) * 1000,
      ).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      currentWeather.sys.sunset = new Date(
        (currentWeather.sys.sunset + currentWeather.timezone) * 1000,
      ).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      currentWeather.wind.speed = (currentWeather.wind.speed * 3.6).toFixed(1);

      const forecastWeather = await (
        await fetch(
          `${process.env.API_URL}forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`,
        )
      ).json();

      forecastWeather.list = forecastWeather.list.map(
        (item: {
          dt: number;
          main: object;
          weather: { description: string }[];
          wind: object;
          visibility: number;
          pop: number;
          sys: object;
          dt_txt: string;
        }) => ({
          ...item,
          dt: new Date((item.dt + forecastWeather.city.timezone) * 1000).toLocaleTimeString(
            "en-GB",
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            },
          ),
          weather: item.weather.map((w) => ({
            ...w,
            description: capFirstLetters(w.description),
          })),
        }),
      );

      return { currentWeather, forecastWeather } as WeatherResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  });
