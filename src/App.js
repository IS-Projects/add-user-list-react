import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import CardModal from "./components/Users/CardModal";
import UsersList from "./components/Users/UsersList";

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
