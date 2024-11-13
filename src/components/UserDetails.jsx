import React from "react";

const UserDetails = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex justify-around items-center w-[70vw] ">
        <h1 className="text-4xl">list of user details</h1>
        <button className="btn">Add new user</button>
      </div>
      <ul className="list-disc">
        <li>hi</li>
      </ul>

      <div className="divider"></div>
      {/* <DeleteUser /> */}
    </div>
  );
};

export default UserDetails;
