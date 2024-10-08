/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ActivitySession } from "../../api/types";
import { useMemo } from "react";
import "./ActivityChart.scss";

type Props = {
  sessions: ActivitySession[];
};

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="legend">
      <span className="legend__title">Activité quotidienne</span>
      <ul className="legend__list">
        {payload.map((entry: any, index: number) => {
          const value =
            entry.dataKey === "calories"
              ? "Calories brûlées (kCal)"
              : "Poids (kg)";

          return (
            <li key={index} className="legend__item">
              <div
                className="legend__circle"
                style={{ backgroundColor: entry.color }}
              ></div>
              <div className="legend__value">{value}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-value">{`${payload[0].value}kg`}</p>
        <p className="tooltip-value">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};
const ActivityChart = ({ sessions }: Props) => {
  const data = useMemo(
    () =>
      sessions.map((session) => {
        return {
          day: new Date(session.day).getDate(),
          calories: session.calories,
          kilogram: session.kilogram,
        };
      }),
    [sessions]
  );

  return (
    <ResponsiveContainer className="container" width="100%" height={320}>
      <BarChart
        data={data}
        margin={{ top: 24, right: 30, left: 32, bottom: 24 }}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickMargin={16} tickLine={false} />
        <YAxis
          dataKey="calories"
          orientation="right"
          tickLine={false}
          axisLine={false}
          tickMargin={28}
        />
        <Legend verticalAlign="top" content={renderLegend} />
        <Tooltip
          content={<CustomTooltip />}
          offset={40}
          allowEscapeViewBox={{ x: true }}
          cursor={{ fill: "#C4C4C480" }}
        />

        <Bar
          name="kg"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          name="Kcal"
          dataKey="calories"
          fill="#F00"
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
