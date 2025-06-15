import { v4 } from "uuid";
import { SingleUserPage, UserListPage } from "../page";

export default [
  {
    id: v4(),
    path: "/users",
    element: <UserListPage />,
    children: [],
  },
  {
    id: v4(),
    path: "/users/:id",
    element: <SingleUserPage />,
  },
];

