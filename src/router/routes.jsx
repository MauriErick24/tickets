import BedSeats from "../views/BedSeats";
import BuyTickets from "../views/Company";
import Home from "../views/Home";
import InformationForm from "../views/InformationForm";
import Payment from "../views/Payment";
import Seats from "../views/Seats";
import Tickets from "../views/Tickets";

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
    path: "/companies",
    element: <BuyTickets />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
  {
    path: "/seats",
    element: <Seats />,
  },
  {
    path: "/Bedseats",
    element: <BedSeats />,
  },
  {
    path: "/payment",
    element: <Payment />,
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
