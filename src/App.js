import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  // const user = null;
  const user = useSelector(selectUser);
  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen />
        ): (
        <Switch>
           <Route path="/profile">
              <ProfileScreen />
            </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
