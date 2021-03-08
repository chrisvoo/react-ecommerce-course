import React, { Component } from "react";
import { ValidationError } from 'joi';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { connect, ConnectedProps } from 'react-redux';
import { schema } from './utils/envUtils';
import Homepage from './pages/homepage/Homepage';
import './App.scss';
import Shoppage from "./pages/shop/Shoppage";
import Header from "./components/header/Header";
import Authpage from "./pages/authpage/Authpage";
import { auth } from './firebase/firebase.utils';
import { createUserProfileDoc } from './firebase/firebase.utils';
import { ShopUser, setCurrentUser, ShopUserData } from './redux/user/user.actions';
import { RootState } from './redux/root-reducer';
import { selectCurrentUser } from "./redux/user/user-selectors";
import CheckOutPage from "./pages/check-out/CheckOutPage";

export type FirebaseUser = firebase.User | null;

class App extends Component<AppProps, { error?: ValidationError }> {
  private unsubscribeFromAuth?: firebase.Unsubscribe = undefined;

  constructor(props: any) {
    super(props);

    this.state = {
      error: undefined
    }
  }

  componentDidMount() {
    const { PORT, REACT_APP_STRIPE_PUBKEY, NODE_ENV, PUBLIC_URL } = process.env

    const { error } = schema.validate({ PORT, REACT_APP_STRIPE_PUBKEY, NODE_ENV, PUBLIC_URL });
    if (error) {
      this.setState({ error });
    }

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
    if (this.state.error) {
      return (
        <div>
          Environment variables check reported an error: {this.state.error.message}
        </div>
      );
    }

    return (
      <>
      {/* Switch component enders the first matching route, Without it,
          multiple components may be rendered */}
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shoppage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to="/" /> : <Authpage />}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user?: ShopUser) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);