import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./ui/NotFound";
import Loading from "./ui/Loading";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/home/Home"));
const Destination = lazy(() => import("./features/destination/Destination"));
const Crew = lazy(() => import("./features/crew/Crew"));
const Technology = lazy(() => import("./features/technology/Technology"));

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
