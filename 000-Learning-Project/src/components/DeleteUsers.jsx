import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleleUsers } from "../store/actions";

const DeleteUsers = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleleUsers());
  };

  return (
    <div>
      <button className="btn btn-outline bg-red-800" onClick={deleteAllUsers}>
        Delete all Users
      </button>
    </div>
  );
};

export default DeleteUsers;
