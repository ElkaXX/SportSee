/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../api/client";
import { UserActivity, UserMainData } from "../../api/types";
import "./Dashboard.scss";
import UserDataKey from "../UserDataKey/UserDataKey";
import caloriesIcon from "../../assets/calories-icon.svg";
import proteinIcon from "../../assets/protein-icon.svg";
import carbsIcon from "../../assets/carbs-icon.svg";
import fatIcon from "../../assets/fat-icon.svg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="legend">
      <span className="legend__title">Activité quotidienne</span>
      <ul className="legend__list">
        {payload.map((entry: any) => {
          console.log(entry);

          const value =
            entry.dataKey === "calories"
              ? "Calories brûlées (kCal)"
              : "Poids (kg)";

          return (
            <li className="legend__item">
              <div
                className="legend__circle"
                style={{ backgroundColor: entry.color }}
              ></div>
              <div className="legend__value">{value}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserMainData | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);

  useEffect(() => {
    client
      .getUserAsync(+userId!)
      .then((response) => setUserData(response.data))
      .catch((error) => console.log(error));

    client
      .getUserActivityAsync(+userId!)
      .then((response) => setUserActivity(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  if (!userData || !userActivity) {
    return <div>Loading</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard__greeting">
        Bonjour
        <span className="dashboard__name"> {userData.userInfos.firstName}</span>
      </div>
      <div className="dashboard__description">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>

      <div className="dashboard__data">
        <div className="dashboard__charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={userActivity.sessions}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis dataKey="calories" orientation="right" />
              <Legend verticalAlign="top" content={renderLegend} />
              <Tooltip />

              <Bar
                name="kg"
                dataKey="kilogram"
                fill="#282D30"
                barSize={7}
                radius={[20, 20, 0, 0]}
              />
              <Bar
                name="Kcal"
                dataKey="calories"
                fill="#F00"
                barSize={7}
                radius={[20, 20, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard__keys">
          <UserDataKey
            name="Calories"
            value={userData.keyData.calorieCount}
            unit="kCal"
            imgSrc={caloriesIcon}
          />
          <UserDataKey
            name="Proteines"
            value={userData.keyData.proteinCount}
            unit="g"
            imgSrc={proteinIcon}
          />
          <UserDataKey
            name="Glucides"
            value={userData.keyData.carbohydrateCount}
            unit="g"
            imgSrc={carbsIcon}
          />
          <UserDataKey
            name="Lipides"
            value={userData.keyData.lipidCount}
            unit="g"
            imgSrc={fatIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
