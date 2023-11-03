import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, DetailPage, CartPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:productId",
    element: <DetailPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
