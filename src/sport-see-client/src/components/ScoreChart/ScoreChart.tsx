import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import "./ScoreChart.scss";

type Props = {
  score: number;
};

const ScoreChart = ({ score }: Props) => {
  const scorePercent = score * 100;

  const data = [
    {
      name: "Score",

      score: scorePercent,
      fill: "#ff0101",
    },
  ];

  return (
    <div className="score-chart">
      <span className="score-title">Score</span>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          layout="radial"
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={90 + 360 * (data[0].score / 100)}
          innerRadius="70%"
          outerRadius="80%"
          barSize={100}
          data={data}
        >
          <circle cx="50%" cy="50%" r="31%" fill="#fff" />
          <RadialBar dataKey="score" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
      {/* Positionnement absolu du texte au-dessus d'un graphique */}
      <div className="score-chart-text">
        <span className="score-percentage">{`${scorePercent}%`}</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};

export default ScoreChart;
