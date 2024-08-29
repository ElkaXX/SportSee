import { UserKeyData } from "../../api/types";
import caloriesIcon from "../../assets/calories-icon.svg";
import proteinIcon from "../../assets/protein-icon.svg";
import carbsIcon from "../../assets/carbs-icon.svg";
import fatIcon from "../../assets/fat-icon.svg";
import UserDataKey from "../UserDataKey/UserDataKey";
import "./UserDataKeyList.scss";

type Props = {
  keyData: UserKeyData;
};

function UserDataKeyList({ keyData }: Props) {
  return (
    <div className="user-data-key-list">
      <UserDataKey
        name="Calories"
        value={keyData.calorieCount}
        unit="kCal"
        imgSrc={caloriesIcon}
      />
      <UserDataKey
        name="Proteines"
        value={keyData.proteinCount}
        unit="g"
        imgSrc={proteinIcon}
      />
      <UserDataKey
        name="Glucides"
        value={keyData.carbohydrateCount}
        unit="g"
        imgSrc={carbsIcon}
      />
      <UserDataKey
        name="Lipides"
        value={keyData.lipidCount}
        unit="g"
        imgSrc={fatIcon}
      />
    </div>
  );
}

export default UserDataKeyList;
