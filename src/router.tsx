import { createBrowserRouter } from "react-router-dom";
import {LayoutContainer} from "@/home/LayoutContainer";
import {HomeContainer} from "@/home/HomeContainer";
import {LoginContainer} from "@/home/login/LoginContainer";
import {ErrorContainer} from "@/home/ErrorContainer";
import {DashboardContainer} from '@/dashboard/DashboardContainer'
import { LayoutDashboard } from "./dashboard/LayoutDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutContainer />,
    errorElement: (
        <LayoutContainer>
            <ErrorContainer />
        </LayoutContainer>
    ),
    children: [
      { index: true, element: <HomeContainer />, },
      { path: "/login", element: <LoginContainer />, },
    ],
  },
  {
    path: "/dashboard",
    element: <LayoutDashboard/>,
    children: [
      { index: true, element: <DashboardContainer/>}
    ]
  },
]);
