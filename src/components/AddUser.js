import AddUserForm from "./AddUserForm";
import Card from "../UI/Card";

const AddUser = ({ onSaveUser, setShowAlert, setErrorMessage }) => {
  return (
    <Card>
      <AddUserForm
        onSaveUser={onSaveUser}
        setShowAlert={setShowAlert}
        setErrorMessage={setErrorMessage}
      />
    </Card>
  );
};

export default AddUser;
