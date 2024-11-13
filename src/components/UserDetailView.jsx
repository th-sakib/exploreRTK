import { useSelector } from "react-redux";

const UserDetailView = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </div>
  );
};

export default UserDetailView;
