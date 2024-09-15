import BuyTickets from "../views/BuyTickets";
import Home from "../views/Home";
import InformationForm from "../views/InformationForm";

const router = [
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/information",
    element: <InformationForm />,
  },
  {
    path: "/information/tickets",
    element: <BuyTickets />,
  },
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   errorElement: <div>Not found</div>,
  //   children: [
  //     {
  //       path: "/inicio",
  //       element: <HomePage />,
  //     },
  //     {
  //       path: "/planDeAhorro",
  //       element: <SavingsPlanPage />,
  //     },
  //     {
  //       path: "/categorias",
  //       element: <CategoriesPage />,
  //     },
  //     {
  //       path: "/reportes",
  //       element: <ReportsPage />,
  //     },
  //     {
  //       path: "/consejos",
  //       element: <AdvicesPage />,
  //     },
  //   ],
  // },
];

export { router };
