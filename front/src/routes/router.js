import { createBrowserRouter } from "react-router-dom";
import MyTestNotFound from "../pages/templates/mytestnotfound/MyTestNotFound";
import MyTestContextContainer from "../pages/templates/mytestcontext/MyTestContextContainer";
import MyTestDocs from "../pages/templates/mytestdocs/MyTestDocs";
import MyTestParameterRead from "../pages/templates/mytesturlparameter/MyTestParameterRead";
import MyTestParameterContainer from "../pages/templates/mytesturlparameter/MyTestParameterContainer";
import MyTestQueryStringRead from "../pages/templates/mytestquerystring/MyTestQueryStringRead";
import MyTestQueryStringContainer from "../pages/templates/mytestquerystring/MyTestQueryStringContainer";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import Login from "../pages/login/Login";
import Join from "../pages/join/Join";
import DetailContainer from "../pages/detail/DetailContainer";
import SearchContainer from "../pages/search/SearchContainer";
import MyPage from "../pages/mypage/MyPage";
import AuthLayout from "../pages/layout/AuthLayout";
import PublicLayout from "../pages/layout/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 메인 추천 페이지
        element: <MainContainer />,
      },
      {
        path: "/:main",
        element: <MainContainer />,
      },
      {
        path: "/:main/:sub",
        element: <MainContainer />,
      },
      {
        path: "/content/:id",
        element: <DetailContainer />,
      },
      {
        path: "/search/:type",
        element: <SearchContainer />,
      },
      {
        element: <AuthLayout />, // 로그인이 필요한 페이지
        children: [
          {
            path: "/my-page",
            element: <MyPage />,
          },
        ],
      },
      {
        element: <PublicLayout />, // 로그인시 접근 불가 페이지
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/join",
            element: <Join />,
          },
        ],
      },
    ],
  },
  {
    path: "/docs",
    element: <MyTestDocs />,
    children: [
      {
        path: "context", // == index: true
        element: <MyTestContextContainer />,
      },
      {
        path: "url-parameter",
        element: <MyTestParameterContainer />,
      },
      {
        path: "url-parameter/:id",
        element: <MyTestParameterRead />,
      },
      {
        path: "query-string",
        element: <MyTestQueryStringContainer />,
      },
      {
        path: "query-string/read",
        element: <MyTestQueryStringRead />,
      },
    ],
  },
  {
    path: "*",
    element: <MyTestNotFound />,
  },
]);

export default router;
