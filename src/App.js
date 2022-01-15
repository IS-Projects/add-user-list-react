import React, { useState } from "react";
import AddUser from "./components/AddUser";
import CardModal from "./components/CardModal";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const saveUserHandler = (newUser) => {
    setUsers((state) => {
      return [newUser, ...state];
    });
  };
  const usersLength = users.length;
  return (
    <div>
      <AddUser
        onSaveUser={saveUserHandler}
        setErrorMessage={setErrorMessage}
        setShowAlert={setShowAlert}
      />
      {showAlert && (
        <CardModal errorMessage={errorMessage} setShowAlert={setShowAlert} />
      )}
      {usersLength > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
