import {
  PolarAngleAxis,
  PolarGrid,
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

  const translateToFr = (key: string) => {
    switch (key) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "intensity":
        return "Intensité";
      case "speed":
        return "Vitesse";
    }
  };

  // Nouvel ordre des touches pour afficher les étiquettes dans l'ordre souhaité
  const customOrder = [
    "intensity",
    "speed",
    "strength",
    "endurance",
    "energy",
    "cardio",
  ];

  const orderedData = customOrder.map((key) =>
    performance.data.find((item) => performance.kind[item.kind] === key)
  );

  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={orderedData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey={({ kind: kindKey }: PerformanceData) =>
              translateToFr(performance.kind[kindKey])
            }
            tick={{
              fill: "#FFF",
              fontSize: 12,
              fontWeight: 500,
              dy: 5,
              dx: 0,
            }}
            tickSize={12}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
