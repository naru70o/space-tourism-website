import { jsx as _jsx } from "react/jsx-runtime";
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
        element: _jsx(Home, {}),
    },
    {
        path: "/destination",
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Destination, {}) })),
    },
    {
        path: "/crew",
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Crew, {}) })),
    },
    {
        path: "/technology",
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Technology, {}) })),
    },
    {
        path: "*",
        element: _jsx(NotFound, {}),
    },
]);
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;
