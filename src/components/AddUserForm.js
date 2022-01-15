import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUserForm.module.css";

const AddUserForm = ({ onSaveUser, setShowAlert, setErrorMessage }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      setShowAlert(true);
      return;
    }

    if (userAge < 1) {
      setErrorMessage("Please enter a valid age (>0).");
      setShowAlert(true);
      return;
    }

    const newUser = {
      name: userName,
      age: userAge,
      id: Math.floor(Math.random() * 100).toString(),
    };
    onSaveUser(newUser);
    setUserName("");
    setUserAge("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>Username</label>
      <input type="text" value={userName} onChange={userNameChangeHandler} />
      <label>Age(Years)</label>
      <input
        type="number"
        min="0"
        step="1"
        value={userAge}
        onChange={userAgeChangeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
