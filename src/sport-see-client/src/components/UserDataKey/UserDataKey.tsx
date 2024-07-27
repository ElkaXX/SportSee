import "./UserDataKey.scss";

type Props = {
  name: string;
  value: number;
  unit: string;
  imgSrc: string;
};

const UserDataKey = ({ name, value, unit, imgSrc }: Props) => {
  return (
    <div className="user-data-key">
      <img className="user-data-key__img" src={imgSrc} alt="user key image" />
      <div className="user-data-key__content">
        <div className="user-data-key__value">{`${value.toLocaleString("en-US")}${unit}`}</div>
        <div className="user-data-key__name">{name}</div>
      </div>
    </div>
  );
};

export default UserDataKey;
