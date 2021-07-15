import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    public router:Router
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
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
