import { createBrowserRouter as cbr } from "react-router-dom";
import {
  AdminDashboardPage,
  CreateTasksPage,
  LandingPage,
  LoginPage,
  ManageTasksPage,
  ManageUsersPage,
  MyTaskPage,
  NotFound,
  RegisterPage,
  ViewTaskDetails,
} from "@/pages";
import PrivateRoutes from "@/routes/PrivateRoutes";
import UserDashboardPage from "@/pages/user/DashboardPage";

export const routes = cbr([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <PrivateRoutes allowedRoles={["admin"]} />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboardPage />,
      },
      {
        path: "/admin/create-task",
        element: <CreateTasksPage />,
      },
      {
        path: "/admin/manage-task",
        element: <ManageTasksPage />,
      },
      {
        path: "/admin/manage-user",
        element: <ManageUsersPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes allowedRoles={["user"]} />,
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboardPage />,
      },
      {
        path: "/user/tasks",
        element: <MyTaskPage />,
      },
      {
        path: "/user/task-details/:id",
        element: <ViewTaskDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
