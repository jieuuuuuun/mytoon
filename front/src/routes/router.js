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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", // == index: true
        element: <MainContainer />
      },
      {
        path: "/webnove",
        element: <MainContainer />
      },
      {
        path: "/ebook",
        element: <MainContainer />
      },
      {
        path: "/daily",
        element: <MainContainer />
      },
    ]
  },
  {
    path: "/docs",
    element: <MyTestDocs />,
    children: [
      {
        path: "context", // == index: true
        element: <MyTestContextContainer />
      },
      {
        path: "url-parameter",
        element: <MyTestParameterContainer />
      },
      {
        path: "url-parameter/:id",
        element: <MyTestParameterRead />
      },
      {
        path: "query-string",
        element: <MyTestQueryStringContainer />
      },
      {
        path: "query-string/read",
        element: <MyTestQueryStringRead />
      }
    ]
  },
  {
    path: "*",
    element: <MyTestNotFound />
  },
])

export default router;