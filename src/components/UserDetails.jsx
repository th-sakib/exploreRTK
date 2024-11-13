import React from "react";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import UserDetailView from "./UserDetailView";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex justify-around items-center w-[70vw] ">
        <h1 className="text-4xl">list of user details</h1>
        <button className="btn" onClick={() => addNewUser(fakeUserData())}>
          Add new user
        </button>
      </div>
      <ul className="list-disc">
        <UserDetailView />
      </ul>

      <div className="divider"></div>
      {/* <DeleteUser /> */}
    </div>
  );
};

export default UserDetails;
