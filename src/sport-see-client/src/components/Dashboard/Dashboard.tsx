/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  UserActivity,
  UserAverage,
  UserMainData,
  UserPerformance,
} from "../../api/types";
import ActivityChart from "../ActivityChart/ActivityChart";
import client from "../../api/client";
import "./Dashboard.scss";
import UserDataKeyList from "../UserDataKeyList/UserDataKeyList";
import AverageChart from "../AverageChart/AverageChart";
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import ScoreChart from "../ScoreChart/ScoreChart";
import {
  mockUserActivity,
  mockUserAverageSessions,
  mockUserMainData,
  mockUserPerformance,
} from "../../api/mock";

const Dashboard = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserMainData | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  const [userAverage, setUserAverage] = useState<UserAverage | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);

  const [isMock] = useState(true);

  useEffect(() => {
    client
      .getUserAsync(+userId!)
      .then((response) => setUserData(response.data))
      .catch((error) => {
        if (isMock) {
          setUserData(mockUserMainData(+userId!));
        }

        console.log(error);
      });

    client
      .getUserActivityAsync(+userId!)
      .then((response) => setUserActivity(response.data))
      .catch((error) => {
        if (isMock) {
          setUserActivity(mockUserActivity(+userId!));
        }
        console.log(error);
      });

    client
      .getUserAverageAsync(+userId!)
      .then((response) => setUserAverage(response.data))
      .catch((error) => {
        if (isMock) {
          setUserAverage(mockUserAverageSessions(+userId!));
        }
        console.log(error);
      });

    client
      .getUserPerformance(+userId!)
      .then((response) => setUserPerformance(response.data))
      .catch((error) => {
        if (isMock) {
          setUserPerformance(mockUserPerformance(+userId!));
        }
        console.log(error);
      });
  }, [isMock, userId]);
  if (!userData || !userActivity || !userAverage || !userPerformance) {
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
          <ActivityChart sessions={userActivity.sessions} />

          <div className="dashboard__charts-wrapper">
            <AverageChart sessions={userAverage.sessions} />
            <PerformanceChart performance={userPerformance} />
            <ScoreChart score={userData.todayScore || userData.score} />
          </div>
        </div>
        <div className="dashboard__keys">
          <UserDataKeyList keyData={userData.keyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
