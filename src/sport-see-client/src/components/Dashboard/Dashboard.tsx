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

  const [isMock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Statut des erreurs

  useEffect(() => {
    setIsLoading(true);
    setError(null); // Réinitialisez l'erreur avant de démarrer une nouvelle requête

    // Requêtes à toutes les API simultanément
    Promise.all([
      client.getUserAsync(+userId!).then(setUserData),
      client.getUserActivityAsync(+userId!).then(setUserActivity),
      client.getUserAverageAsync(+userId!).then(setUserAverage),
      client.getUserPerformance(+userId!).then(setUserPerformance),
    ])
      .then(() => {
        setIsLoading(false); // Arrêt de l'indicateur de chargement
      })
      .catch((error: any) => {
        console.error("Erreur de chargement des données:", error);
        if (isMock) {
          // Si des données "mock" sont utilisées
          setUserData(mockUserMainData(+userId!));
          setUserActivity(mockUserActivity(+userId!));
          setUserAverage(mockUserAverageSessions(+userId!));
          setUserPerformance(mockUserPerformance(+userId!));
        } else {
          setError(
            "Erreur de chargement des données. Veuillez réessayer plus tard."
          );
        }
        setIsLoading(false);
      });
  }, [isMock, userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!userData || !userActivity || !userAverage || !userPerformance) {
    return <div>Loading...</div>;
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
            {/* Transmet une valeur au composant ScoreChart. (userData.todayScore ou userData.score) */}
            <ScoreChart score={userData.todayScore || userData.score} />{" "}
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
