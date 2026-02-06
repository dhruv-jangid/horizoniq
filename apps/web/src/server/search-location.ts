import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const searchLocation = createServerFn({ method: "GET" })
  .inputValidator(z.object({ query: z.string() }))
  .handler(async ({ data }) => {
    const { query } = data;

    try {
      const response = await fetch(
        `${process.env.API_SEARCH_URL}?q=${query}&limit=10&appid=${process.env.API_KEY}`,
      );
      const locations = (await response.json()) as Locations;

      return locations;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  });
