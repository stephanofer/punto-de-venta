import { createBrowserRouter } from "react-router-dom";
import {LayoutContainer} from "@/home/LayoutContainer";
import {HomeContainer} from "@/home/HomeContainer";
import {LoginContainer} from "@/home/login/LoginContainer";
import {ErrorContainer} from "@/home/ErrorContainer";

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
]);
