import "./ScoreChart.scss";

type Props = {
  score: number;
};

const ScoreChart = ({ score }: Props) => {
  return <div className="score-chart">Score: {score}</div>;
};

export default ScoreChart;
