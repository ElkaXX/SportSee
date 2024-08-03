import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { AverageSession } from '../../api/types';
import { useMemo } from 'react';

type Props = {
  sessions: AverageSession[];
};

const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Adjusted array to make 0 correspond to Monday

const AverageChart = ({ sessions }: Props) => {
  console.log('Sessions: ', sessions);

  const data = useMemo(
    () =>
      sessions.map((session) => ({
        day: daysOfWeek[session.day - 1],
        sessionLength: session.sessionLength
      })),
    sessions
  );

  return (
    <ResponsiveContainer width={258} height={263}>
      <LineChart data={data}>
        <XAxis dataKey="day" fontSize={12} />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageChart;
