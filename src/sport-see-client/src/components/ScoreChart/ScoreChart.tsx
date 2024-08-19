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
    {
      score: 100,
      fill: "#fff",
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
          endAngle={450}
          innerRadius="70%"
          outerRadius="90%"
          barSize={100}
          data={data}
        >
          <RadialBar dataKey="score" />

          <Label
            value={`${data[0].score}%`}
            position="center"
            className="custom-label"
            fontSize="24"
            fill="#000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
