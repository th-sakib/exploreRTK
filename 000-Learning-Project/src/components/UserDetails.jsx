import React from "react";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import UserDetailView from "./UserDetailView";
import DeleteUsers from "./DeleteUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex justify-between items-center w-[70vw] ">
        <h1 className="text-4xl">list of user details</h1>
        <button className="btn" onClick={() => addNewUser(fakeUserData())}>
          Add new user
        </button>
      </div>

      <ul className="list-disc w-[70vw] mt-9">
        <UserDetailView />
      </ul>

      <div className="divider"></div>
      <DeleteUsers />
    </div>
  );
};

export default UserDetails;
