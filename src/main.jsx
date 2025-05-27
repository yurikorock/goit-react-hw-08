import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
// Імпорт стилів нормалізації
import "modern-normalize";
//
import "./index.css";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
