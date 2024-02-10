import React from "react";
import Flex from "../../utils/Flex";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="container mx-auto w-full     pt-10">
      <div className="flex">
        <div className="w-full border-b  pb-5">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>{" "}
          || <span>Add User</span>
        </div>
      </div>

      <div className="w-full h-[250px]  mt-10 lg:flex md:flex sm:block block  gap-5 rounded-md lg:px-0 md:px-0 px-10">
        <div className="shadow w-full h-full mx-auto  p-10">
          <div>
            <div>
              <Flex>
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="text-base pb-2 inline-block"
                  >
                    First Name
                  </label>
                  <div>
                    <input
                      className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="text-base pb-2 inline-block"
                  >
                    Last Name
                  </label>
                  <div>
                    <input
                      className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </Flex>
              <div className="py-3">
                <Flex>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="text-base pb-2 inline-block"
                    >
                      Email
                    </label>
                    <div>
                      <input
                        className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                        type="email"
                        name="email"
                        placeholder="Email Name"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="PhotoUrl"
                      className="text-base pb-2 inline-block"
                    >
                      Photo Url
                    </label>
                    <div>
                      <input
                        className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                        type="text"
                        name="photoUrl"
                        placeholder="PhotoUrl"
                      />
                    </div>
                  </div>
                </Flex>
              </div>
              <Flex>
                <div className="w-full">
                  <label
                    htmlFor="companyName"
                    className="text-base pb-2 inline-block"
                  >
                    Company Name
                  </label>
                  <div>
                    <input
                      className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="w-full"></div>
              </Flex>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] ">
          <div className="shadow w-full h-full mx-auto  p-10">
            <div>
              <Flex>
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="text-base pb-2 inline-block"
                  >
                    Address
                  </label>
                </div>
              </Flex>
              <Flex>
                <div className="w-full">
                  <label
                    htmlFor="state"
                    className="text-base pb-2 inline-block"
                  >
                    State
                  </label>
                  <div>
                    <input
                      className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                      type="text"
                      name="state"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="city" className="text-base pb-2 inline-block">
                    City
                  </label>
                  <div>
                    <input
                      className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                </div>
              </Flex>
              <div className="pt-3">
                <Flex>
                  <div className="w-full">
                    <label
                      htmlFor="street"
                      className="text-base pb-2 inline-block"
                    >
                      Street
                    </label>
                    <div>
                      <input
                        className="w-full border-none outline-none shadow rounded-md py-3 px-1 text-base"
                        type="text"
                        name="street"
                        placeholder="Street"
                      />
                    </div>
                  </div>
                  <div className="w-full"></div>
                </Flex>
              </div>
            </div>
            <div className="text-end">
              <input
                className="px-10 py-3 shadow font-bold text-lg bg-blue-400 rounded-md cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
