import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {map, take} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:String
  password:String
  constructor(
    public authService:AuthenticationService,
    public router:Router,
    private afStore:AngularFirestore,

  ) { }

  ngOnInit() {
    if(localStorage.getItem('login')=="true"){
      this.router.navigateByUrl('/tabs')
    }
  }

  login() {

    this.authService.SignIn(this.email, this.password)
      .then((res) => {
        this.router.navigateByUrl('/tabs');
        localStorage.setItem("login","true");
        localStorage.setItem('uid', res.user.uid)
      }).then(()=>{
        console.log("dsfgsd");
        const x=this.afStore
        .collection<any>('user')
        .doc(localStorage.getItem('uid'))
        .collection<any>('details')
        .get().subscribe(doc=>{
          doc.docs.forEach(x=>
            localStorage.setItem('currentUserDoc', x.id)
          )
        })
       // console.log(x)
      }

      )

      .catch((error) => {
        window.alert(error.message)
      })
  }
}
