import Card from "../UI/Card";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  return (
    <Card as="ul">
      {users.map((user) => (
        <UserItem key={user.id} userName={user.name} userAge={user.age} />
      ))}
    </Card>
  );
};

export default UsersList;
