/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  //Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { AverageSession } from "../../api/types";
import { useMemo } from "react";
import "./AverageChart.scss";

type Props = {
  sessions: AverageSession[];
};

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log("Payload", payload);
  console.log("Label", label);

  if (active && payload && payload.length) {
    return (
      <div className="average-chart__tooltip">
        {payload[0].payload.sessionLength} min
      </div>
    );
  }

  return null;
};

const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]; // Tableau ajusté pour que 0 corresponde à lundi

const AverageChart = ({ sessions }: Props) => {
  const data = useMemo(
    () =>
      sessions.map((session) => ({
        day: daysOfWeek[session.day - 1],
        sessionLength: session.sessionLength,
      })),
    [sessions]
  );

  return (
    <div className="average-chart">
      <div className="average-chart__title">Durée moyenne des sessions</div>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 100, left: 16, right: 16, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            fontSize={12}
            tick={{ fill: "#FFF" }}
            axisLine={false} // Supprime une ligne d'axe
          ></XAxis>
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            dot={false}
            activeDot={{ stroke: "white", strokeWidth: 5, r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageChart;
