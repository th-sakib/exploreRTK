import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

const UserDetailView = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();

  const deleteUserBtn = (payload) => {
    dispatch(deleteUser(payload));
  };

  return (
    <div>
      {data.map((user, id) => {
        return (
          <li className="flex justify-between items-center my-2" key={id}>
            {user}{" "}
            <button
              className="btn btn-warning"
              onClick={() => deleteUserBtn(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UserDetailView;
