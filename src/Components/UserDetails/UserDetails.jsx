import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { ScaleLoader } from "react-spinners";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useContext(AuthContext);
  // -------------  useState use-------------
  const [singleData, setSingleData] = useState({});
  //--------------   useState use-------------
  const { image, firstName, lastName, email, address, company } = singleData;
  //--------------   useEffect use-------------
  useEffect(() => {
    const singleDataFilter =
      data?.users?.length > 0 && data?.users?.filter((user) => user?.id == id);
    if (singleDataFilter?.length > 0) {
      setSingleData(singleDataFilter[0]);
    }
  }, [id, data?.users]);
  //--------------   useEffect use-------------

  return (
    <>
      {isLoading ? (
        <div>
          <ScaleLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center px-10">
          <div className="shadow  rounded-lg hover:shadow-md hover:shadow-red-200  hover:duration-300 hover:ease-linear cursor-pointer  hover:transition-shadow lg:w-1/4 md:w-1/2 sm:w-full w-full">
            <div className="pl-10 py-3">
              <Link to="/" className="underline text-red-400 ">
                Home
              </Link>{" "}
              || <span>Single User</span>
            </div>
            {/*----------- single user Details------------*/}
            <div className="p-10">
              <figure className="bg-[#e2dfdf] py-4 flex justify-center items-center rounded-lg">
                <img width={100} src={image} alt="image" />
              </figure>

              <div>
                <h1 className="pt-4">
                  First Name :{" "}
                  <Link className="hover:text-red-400">{firstName}</Link>
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
            </div>

            {/*------------- single user  Details----------------*/}
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
