import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className="bg-white round-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-600 mb-1">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>
        <div className="mt-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {user.company?.name || "FBS-Philippines"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
