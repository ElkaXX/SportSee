import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { AverageSession } from '../../api/types';
import { useMemo } from 'react';
import './AverageChart.scss'

type Props = {
  sessions: AverageSession[];
};

const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Tableau ajusté pour que 0 corresponde à lundi

const AverageChart = ({ sessions }: Props) => {
  console.log('Sessions: ', sessions);

  const data = useMemo(
    () =>
      sessions.map((session) => ({
        day: daysOfWeek[session.day - 1],
        sessionLength: session.sessionLength
      })),
    [sessions]
  );

  return (
    <div className="responsive-container">
      <span className="title">Durée moyenne des sessions</span>
    <ResponsiveContainer >
      <LineChart data={data} margin={{ top: 100, left: 16, right: 16, bottom: 20 }}>
      <XAxis 
          dataKey="day" 
          fontSize={12} 
          tick={{ fill: '#FFF' }} 
          axisLine={false} // Supprime une ligne d'axe
        />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFF" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default AverageChart;
