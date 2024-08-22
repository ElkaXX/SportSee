import {
  Label,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
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
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={90 + 360 * (data[0].score / 100)}
          innerRadius="70%"
          outerRadius="80%"
          barSize={100}
          data={data}
        >
          <RadialBar dataKey="score" cornerRadius={10} />

          <Label
            value={`${data[0].score}%`}
            position="center"
            className="custom-label"
            fontSize="24"
            fill="#000"
          ></Label>
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
