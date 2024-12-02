import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/Home";
import Crew from "./features/crew/Crew";
import Destination from "./features/destination/Destination";
import Technology from "./features/technology/Technology";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/distination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
