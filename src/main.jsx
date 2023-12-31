import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./pages/login";
import Home from "./pages/home";
import ScanLogo from "./pages/scanlogo";
import resultReducer from "./slices/resultSlice.js";
import chunkReducer from "./slices/chunkSLice.js";
import UploadAdmin from "./pages/upload_admin";
import ReviewsPage from "./pages/ReviewsPage";
import AddUserReview from "./pages/AdddUserReview";
import UserAdmin from "./pages/UserAdmin.jsx";

const store = configureStore({
  reducer: {
    results: resultReducer,
    chunks: chunkReducer,
  },
});

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "scanlogo",
    element: <ScanLogo />,
  },{
  path:'user_admin',
    element:<UserAdmin/>
  },
  {
    path: "admin_upload",
    element: <UploadAdmin />,
  },
  {
    path: "reviews/:id",
    element: <ReviewsPage />,
  },
  {
    path: "add_review/:id",
    element: <AddUserReview />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
