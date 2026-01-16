import { Line, LineChart, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export const Chart = ({ chartData }: { chartData: WeatherResponse["forecastWeather"]["list"] }) => {
  const slicedData = chartData.slice(0, 7);
  const data = slicedData
    .map((item) => item.dt)
    .map((time, idx) => ({
      percentage: slicedData.map((item) => Math.round(item.pop * 100))[idx],
      time: time,
      degree: `${slicedData.map((item) => Math.round(item.main.temp))[idx]}°`,
    }));

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <XAxis
          xAxisId="top"
          orientation="top"
          dataKey="degree"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <XAxis
          xAxisId="bottom"
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 5)}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="line" />}
          formatter={(value) => {
            return ["Chances of Rain: ", `${value}%`];
          }}
        />
        <Line
          xAxisId="bottom"
          dataKey="percentage"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={1}
          stroke="var(--color-desktop)"
        />
      </LineChart>
    </ChartContainer>
  );
};
