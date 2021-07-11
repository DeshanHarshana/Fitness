import { Injectable, NgZone } from '@angular/core';

import { User } from "../model/User";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {

  }

   // Login in with email/password
   SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  // Email verification when new user register


  // // Recover password
  // PasswordRecover(passwordResetEmail) {
  //   return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
  //   .then(() => {
  //     window.alert('Password reset email has been sent, please check your inbox.');
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }

  // // Returns true when user is looged in

  // // Returns true when user's email is verified
  // get isEmailVerified(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return (user.emailVerified !== false) ? true : false;
  // }

  // // Sign in with Gmail
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // // Auth providers
  // AuthLogin(provider) {
  //   return this.ngFireAuth.auth.signInWithPopup(provider)
  //   .then((result) => {
  //      this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       })
  //     this.SetUserData(result.user);
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }

  // // Store user in localStorage
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }

  // // Sign-out
  // SignOut() {
  //   return this.ngFireAuth.auth.signOut().then(() => {
  //     localStorage.removeItem('user');
  //     this.router.navigate(['login']);
  //   })
  // }
}
