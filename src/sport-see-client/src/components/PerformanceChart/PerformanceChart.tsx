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

  const orderedData = performance.data.map((dataPoint) => ({
    ...dataPoint,
    kind: customOrder[dataPoint.kind - 1], // Réarrangement dans un nouvel ordre
  }));

  return (
    <div className="performance-chart">
      <ResponsiveContainer>
        <RadarChart data={orderedData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey={({ kind }: PerformanceData) => translateToFr(kind)}
            tick={{ fill: "#FFF", fontSize: 12, fontWeight: 500, dx: 0, dy: 2 }}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
