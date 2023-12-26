import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom"; // Corrected import
import { AuthPages } from "./component/auth-pages/AuthPages";
import { Dashboard } from "./component/dashboard/Dashboard";
import { FeedbackForm } from "./component/feedback-form/FeedbackForm";
import { Homepage } from "./component/homepage/Homepage";
import { pageUrl } from "./constant/pageurl";
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path={pageUrl.DASHBOARD} element={<Dashboard />} />
        <Route path={pageUrl.SEND_FEEDBACK} element={<FeedbackForm />} />
        <Route path={pageUrl.REGISTERATION_PAGE} element={<AuthPages />} />
        <Route path={pageUrl.LOGIN_PAGE} element={<AuthPages />} />
        <Route path={pageUrl.HOMEPAGE} element={<Homepage />} />
      </Routes>
    </React.Fragment>
  );
}

function PrivateRoute(props) {
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <AuthPages />
      </SignedOut>
    </>
  );
}

export default App;
