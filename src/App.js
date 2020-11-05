import React from 'react';
import { Switch, Route } from 'react-router-dom';



import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import ContactPage from './pages/contact/contact.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    //Open Subscription check userAuth
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        //check if db updated at userRef data. listens if snapshot changes
        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                ID: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {  console.log(this.state);} 
            // pass 2nd function. needs to wait for this.setState to finish before logging. This makes sure setState is fully
            )
        });
  
      }
      this.setState({ currentUser: userAuth});

        //console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/sign-in' component={SignInSignUpPage} />
       </Switch>
      </div>
    );
  }



}

export default App;
