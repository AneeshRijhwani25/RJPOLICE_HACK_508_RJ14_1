// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { HashRouter as Router, useNavigate } from "react-router-dom"; // Update import
// import { ClerkProvider } from "@clerk/clerk-react";
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// // const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY

// ReactDOM.createRoot(!document.getElementById('root')).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>,
// )

// // function ClerkProviderWithNavigate({ children }) {
// //   return (
// //     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
// //       <App />
// //     </ClerkProvider>

// //   );
// // }

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();







import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={"pk_test_bG92aW5nLXdyZW4tMjguY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <Router>
        <App />
      </Router>
    </ClerkProvider>
  </React.StrictMode>,
);

reportWebVitals();
