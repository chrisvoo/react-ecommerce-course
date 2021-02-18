import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
import Hatspage from './pages/hatspage/Hatspage';
import './App.scss';
import Shoppage from "./pages/shop/Shoppage";
import Header from "./components/header/Header";
import Authpage from "./pages/authpage/Authpage";
import { auth } from './firebase/firebase.utils';
import { createUserProfileDoc } from './firebase/firebase.utils';
import { 
  ShopUser, setCurrentUser, ShopUserData, UserActionTypes,
} from './redux/user/user.actions';

export type FirebaseUser = firebase.User | null;
export type AppProps = {
  setCurrentUser: (user?: ShopUser) => UserActionTypes,
  currentUser?: ShopUser
}

type PropsFromRedux = {
  currentUser: ShopUser
  setCurrentUser: (user?: ShopUser) => any
}

class App extends Component<PropsFromRedux> {
  private unsubscribeFromAuth?: firebase.Unsubscribe = undefined;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth: FirebaseUser) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        if (userRef) {
          userRef.onSnapshot((snap: firebase.firestore.DocumentSnapshot) => {
            setCurrentUser({
              id: snap.id,
              ...snap.data() as ShopUserData,
            });
          })
        }
      }

      setCurrentUser(undefined);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth!();
  }

  render() {
    return (
      <>
      {/* Switch component enders the first matching route, Without it,
          multiple components may be rendered */}
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop/hats' component={Hatspage} />
            <Route path='/shop' component={Shoppage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to="/" /> : <Authpage />}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user?: ShopUser) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);