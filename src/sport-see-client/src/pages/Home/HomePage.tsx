import "./HomePage.scss";
import client from "../../api/client";
import { useEffect, useState } from "react";
import { UserMainData } from "../../api/types";

const HomePage = () => {
  const [userData, setUserData] = useState<UserMainData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .getUser(18)
      .then((response) => setUserData(response.data))
      .catch((error) => setError(error));
  }, []);

  if (!userData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  if (!userData) {
    return <div>No user</div>;
  }

  return (
    <div className="home">
      <div className="home__greeting">
        Bonjour
        <span className="home__name"> {userData.userInfos.firstName}</span>
      </div>
      <div className="home__description">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  );
};

export default HomePage;
