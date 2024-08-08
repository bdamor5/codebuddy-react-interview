import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
const Posts = lazy(() => import("./pages/Posts"));
import PagesLayout from "./Layout/PagesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: (
          <Suspense fallback={<div className="mt-10 text-center text-2xl">Loading Posts...</div>}>
            <Posts />
          </Suspense>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
