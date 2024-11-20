import CompanyList from "../pages/CompanyList";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import InfoForm from "../pages/InfoForm";

const routesList = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/info-form",
    element: <InfoForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/companies",
    element: <CompanyList />,
    errorElement: <ErrorPage />,
  },
];

export default routesList;
