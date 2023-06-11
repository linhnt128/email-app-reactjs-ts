import React, { FC, lazy, Suspense } from "react";
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import './App.css';

// import ultils
import Spinner from "./ultils/Spinner";
import fallback from "./ultils/Fallback";


// import components 
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Main from "./components/Main/Main";
import EmailDetails from "./components/Main/Layout/EmailDetails/EmailDetails";

// import context
import { UserProvider } from "./components/context/UserContext";








// -----------------------------------------main code starts here----------------------------------------------------------
type Props = {};


const LogInForm = lazy(() => import("./components/LoginForm/LogInForm"));


const App: FC<Props> = () => {

  const [userAuth, setUserAuth] = useState<boolean>(false);

    
  return (
    <ErrorBoundary
      fallback={fallback}
    >
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" 
            element={
            // lazy load
            <Suspense
              fallback={<Spinner/>}
            >
              <UserProvider>
                <LogInForm 
                  setUserAuth={setUserAuth}
                />
              </UserProvider>
            </Suspense>
          }
          />
            {
              userAuth && 
              <Route 
                path="main" 
                element={ <Main userAuth={userAuth} setUserAuth={setUserAuth}/> }
              >
                  <Route path="email" element={null}>
                    <Route path=":folder" element={null}>
                      <Route path=":emailId" element={null}></Route>
                    </Route>
                  </Route>
                  <Route path="home" element={null}></Route>
                  <Route path="contact" element={null}></Route>
                </Route>
            }
          {/* throw exception */}
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
    </ErrorBoundary>
  )
}



export default App;
