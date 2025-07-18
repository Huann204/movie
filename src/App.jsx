import React from "react";

import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
