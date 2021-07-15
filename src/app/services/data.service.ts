import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BodyDetails } from '../model/BodyDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public afStore: AngularFirestore,
    public router:Router
  ) { }

  Age(value){
    this.afStore
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('details')
    .doc(localStorage.getItem('currentUserDoc')).update({
      age:value
    }).then(x=>{
      this.router.navigate(['bodydetails'])
    })
  }
  setBodyDetails(height, weight){
    this.afStore
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('details')
    .doc(localStorage.getItem('currentUserDoc')).update({
      height:height,
      weight:weight
    }).then(x=>{
      this.router.navigate(['complete'])
    }

    )
  }
  setProfileBodyDetails(height, weight){
   return this.afStore
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('details')
    .doc(localStorage.getItem('currentUserDoc')).update({
      height:height,
      weight:weight
    })

  }
  getProfileBodyDetails() {
    return this.afStore.collection('user').doc(localStorage.getItem('uid'))
    .collection('details').doc<BodyDetails>(localStorage.getItem('currentUserDoc')).valueChanges();
  }
}
