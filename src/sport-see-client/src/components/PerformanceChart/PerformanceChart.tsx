import {
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { UserPerformance } from "../../api/types";
import "./PerformanceChart.scss";

type Props = {
  performance: UserPerformance;
};

const PerformanceChart = ({ performance }: Props) => {
  console.log("Performance", performance);

  return (
    <div className="performance-chart">
      <ResponsiveContainer>
        <RadarChart data={performance.data}>
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
