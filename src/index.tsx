import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Get the root element from the HTML document by its ID
const container = document.getElementById("root");

// Check if the root element exists
if (!container) {
  throw new Error(
    "Root element not found. Please ensure there is an element with id 'root' in your HTML."
  );
}

// Create a root for rendering the React application
const root = ReactDOM.createRoot(container as HTMLElement);

// Render the React application inside the root element
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
