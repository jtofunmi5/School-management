"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// 1. Your data for the chart
const chartData = [
  { role: "students", count: 450, fill: "var(--color-students)" },
  { role: "teachers", count: 45, fill: "var(--color-teachers)" },
  { role: "parents", count: 320, fill: "var(--color-parents)" },
  { role: "admins", count: 12, fill: "var(--color-admins)" },
]

// 2. Configuration matching your theme variables (--chart-1, --chart-2, etc.)
const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
  teachers: {
    label: "Teachers",
    color: "hsl(var(--chart-2))",
  },
  parents: {
    label: "Parents",
    color: "hsl(var(--chart-3))",
  },
  admins: {
    label: "Admins",
    color: "hsl(var(--chart-4))",
  },
}

export default function RolePieChart() {
  return (
    <Card className="flex flex-col w-full max-w-sm">
      <CardHeader className="items-center pb-0">
        <CardTitle>User Breakdown</CardTitle>
        <CardDescription>Distribution across roles</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="role"
              innerRadius={60} // Set innerRadius to make it a Donut chart (remove this line for a solid Pie chart)
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}