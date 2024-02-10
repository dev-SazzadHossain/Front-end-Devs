import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, image, firstName, lastName, address, email, company } = user;
  return (
    <div className="shadow p-10 rounded-lg hover:shadow-md hover:shadow-red-200  hover:duration-300 hover:ease-linear cursor-pointer  hover:transition-shadow">
      {/* single user */}
      <figure className="bg-[#e2dfdf] py-4 flex justify-center items-center rounded-lg">
        <img width={100} src={image} alt="image" />
      </figure>
      {/* info */}
      <div>
        <h1 className="pt-4">
          First Name :{" "}
          <Link to={`/user/${id}`} className="hover:text-red-400">
            {firstName}
          </Link>
        </h1>
        <h3 className="">Last Name : {lastName}</h3>
        <p className="">Email : {email}</p>
        <p className="pb-4">Company Name : {company?.name}</p>
        <h3 className="border-b">Address :</h3>
        <address>
          <span>{address?.address},</span>
          <span>{address?.city},</span>
          <span>{address?.state || ""}</span>
        </address>
      </div>
      {/* info */}
      {/* single user */}
    </div>
  );
};

export default User;
