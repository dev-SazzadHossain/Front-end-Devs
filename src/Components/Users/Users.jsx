import React, { useContext, useEffect, useState } from "react";
import User from "../User/User";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils/AxiosInstance";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../Context/Context";
import SearchUsers from "../SearchUsers/SearchUsers";
import AddUser from "../AddUser/AddUser";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, isLoading, isError, error } = useContext(AuthContext);
  const [searchUsers, setSearchUsers] = useState([]);
  const [sortBy, setSortBy] = useState("firstName");
  const [sortedUsers, setSortedUsers] = useState(data?.users);
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortUsers(event.target.value);
  };

  let content;
  if (isLoading)
    content = (
      <div>
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  if (!isLoading && isError) content = <h2>{error?.message}</h2>;
  if (!isLoading && !isError && data?.length === 0)
    content = <h2>Users is Empty</h2>;
  if (!isLoading && !isError && data?.users?.length > 0)
    content = data?.users?.map((user) => <User key={user?.id} user={user} />);

  //--------------- search result find -------------
  const handelSearch = (e) => {
    const searchResult = [];
    data?.users?.length > 0 &&
      data?.users?.filter((user) => {
        if (
          user.username.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          searchResult.push(user);
        }
      });
    setSearchUsers(searchResult);
  };

  //--------------- search result find -------------
  //   ---------sort users--------------
  const sortUsers = (sortField) => {
    const sortedData = data?.users?.sort((a, b) => {
      if (sortField === "firstName") {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortField === "lastName") {
        return a.lastName.localeCompare(b.lastName);
      } else if (sortField === "email") {
        return a.email.localeCompare(b.email);
      }
      return 0;
    });
    setSortedUsers(sortedData);
  };
  //   ---------sort users--------------

  return (
    <div className="container py-4 lg:px-0 md:px-0 px-10">
      <div className="pb-5 flex flex-wrap justify-center gap-10">
        <input
          onChange={handelSearch}
          type="search"
          name="search"
          id=""
          placeholder="Search..."
          className="border-none outline-none py-3 px-2 shadow max-w-[250px] w-[250px] text-base  font-normal"
        />
        <select
          className="border-none outline-none py-3 px-2 shadow max-w-[250px] w-[250px] text-base  font-normal"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="firstName">Sort by First Name</option>
          <option value="lastName">Sort by Last Name</option>
          <option value="email">Sort by Last Email</option>
        </select>
        {/* -----------add user form----------- */}
        <button className="border-none outline-none py-3 px-5 rounded-lg shadow   text-base  font-normal">
          <Link to="/user/add">Add User</Link>
        </button>
        {/*--------- add user form------------ */}
      </div>
      {searchUsers?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
            {searchUsers?.map((user) => (
              <SearchUsers key={user?.id} user={user} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
          {content}
        </div>
      )}
    </div>
  );
};

export default Users;
