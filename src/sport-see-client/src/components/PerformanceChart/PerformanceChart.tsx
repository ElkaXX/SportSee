import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { PerformanceData, UserPerformance } from "../../api/types";
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
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey={({ kind: kindKey }: PerformanceData) =>
              performance.kind[kindKey]
            }
          />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
