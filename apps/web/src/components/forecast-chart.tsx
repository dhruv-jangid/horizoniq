import { Line, LineChart, XAxis } from "recharts";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#fff",
  },
} satisfies ChartConfig;

export const ForecastChart = ({
  chartData,
}: {
  chartData: WeatherResponse["forecastWeather"]["list"];
}) => {
  const uniqueDays = chartData.filter((item, idx, arr) => {
    const currentDay = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
    const prevDay =
      idx > 0
        ? new Date(arr[idx - 1].dt_txt).toLocaleDateString("en-US", { weekday: "short" })
        : null;
    return currentDay !== prevDay;
  });
  const data = uniqueDays.map((item) => ({
    temp: Math.round(item.main.temp),
    day: new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
    degree: `${Math.round(item.main.temp)}°`,
  }));

  return (
    <ChartContainer config={chartConfig} className="h-full w-full min-h-32">
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 24,
          right: 24,
          top: 2,
          bottom: 36,
        }}
      >
        <XAxis
          xAxisId="top"
          orientation="top"
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval="preserveStartEnd"
          style={{
            fill: "#fff",
            fontSize: "clamp(0.875rem, 2vw, 1.5rem)",
            opacity: 0.8,
          }}
        />
        <XAxis
          xAxisId="bottom"
          dataKey="degree"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval="preserveStartEnd"
          style={{
            fill: "#fff",
            fontSize: "clamp(1.5rem, 5vw, 3.75rem)",
            fontWeight: 500,
          }}
        />
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          formatter={(value) => {
            return ["Temperature: ", `${value}°`];
          }}
        />
        <Line
          xAxisId="bottom"
          dataKey="temp"
          type="natural"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
          strokeWidth={3}
          dot={{ fill: "var(--color-desktop)" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ChartContainer>
  );
};
