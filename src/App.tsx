import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import firebase from 'firebase';
import Homepage from './pages/homepage/Homepage';
import Hatspage from './pages/hatspage/Hatspage';
import './App.scss';
import Shoppage from "./pages/shop/Shoppage";
import Header from "./components/header/Header";
import Authpage from "./pages/authpage/Authpage";
import { auth } from './firebase/firebase.utils';
import { createUserProfileDoc } from './firebase/firebase.utils';

export interface ShopUserData {
  displayName: string
  email: string
  createdAt: Date
}

export interface ShopUser extends ShopUserData {
  id: string
}

export type FirebaseUser = firebase.User | null;

function App() {
  const [currentUser, setCurrentUser] = useState<ShopUser | null>(null);

  useEffect(() => {
    const unsubscribeFromAuth: firebase.Unsubscribe = auth.onAuthStateChanged(async (user: FirebaseUser) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        if (userRef) {
          userRef.onSnapshot((snap: firebase.firestore.DocumentSnapshot) => {
            setCurrentUser({
              id: snap.id,
              ...snap.data() as ShopUserData,
            });
          })
        }
      } else {
        setCurrentUser(null);
      }
    });

    // If your effect returns a function, React will run it when it is time to clean up
    return () => unsubscribeFromAuth();
  }, [])

  return (
    <>
    {/* Switch component enders the first matching route, Without it,
        multiple components may be rendered */}
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop/hats' component={Hatspage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={Authpage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
