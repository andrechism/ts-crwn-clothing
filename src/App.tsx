import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

interface CurrentUser {
  id: string;

}

interface AppState {
  currentUser: CurrentUser | null;
}

class App extends Component<{}, AppState> {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot(snapShot => {
            console.log(snapShot)

            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => console.log(this.state));
          });
          
        }
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }

  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
