import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster />
    </>
  );
};

export default App;
