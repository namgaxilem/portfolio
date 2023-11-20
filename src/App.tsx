import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ScrollDown from "./components/ScrollDown";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
      <ScrollDown />
    </>
  );
}

export default App;
