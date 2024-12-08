import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/Home";
import Crew from "./features/crew/Crew";
import Destination from "./features/destination/Destination";
import Technology from "./features/technology/Technology";
import NotFound from "./ui/NotFound";
import Loading from "./ui/Loading";
import { Suspense } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: (
      <Suspense fallback={<Loading />}>
        <Destination />
      </Suspense>
    ),
  },
  {
    path: "/crew",
    element: (
      <Suspense fallback={<Loading />}>
        <Crew />
      </Suspense>
    ),
  },
  {
    path: "/technology",
    element: (
      <Suspense fallback={<Loading />}>
        <Technology />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
