import styles from "./UserItem.module.css";

const UserItem = ({ userName, userAge }) => {
  return (
    <li className={styles.li}>
      {userName} ({userAge} years old)
    </li>
  );
};

export default UserItem;
