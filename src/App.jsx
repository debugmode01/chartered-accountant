import { createBrowserRouter, RouterProvider } from "react-router";
import AppRoutes from "./routes";

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: <AppRoutes />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App