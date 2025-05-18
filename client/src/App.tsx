import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/schema/route-schema";

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
