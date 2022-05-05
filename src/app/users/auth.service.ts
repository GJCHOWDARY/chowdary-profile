import { User } from './user.interface'
import { Router } from "@angular/router";


declare var firebase: any;

export class AuthService {
  constructor() { }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        // Handle Errors here.
        console.log(error)
        // ...
      });
  }
  signInUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error)
        // Handle Errors here.
        // ...
      });
  }
  isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log("hiiiiii", user)
      return true;
      // User is signed in.
    } else {
      return false;
      // No user is signed in.
    }
  }
  isLogin() {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log("hiiiiii", user)
      return false;
      // User is signed in.
    } else {
      return true;
      // No user is signed in.
    }
  }
  isLogout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("Sign out Successfully")
    }).catch(function (error) {
      // An error happened.
    });
  }
}
