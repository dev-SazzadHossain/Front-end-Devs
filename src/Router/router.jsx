import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserDetails from "../Components/UserDetails/UserDetails";
import Main from "../Layout/Main";
import AddUser from "../Components/AddUser/AddUser";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />}></Route>
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/user/add" element={<AddUser />} />
    </Route>
  )
);
