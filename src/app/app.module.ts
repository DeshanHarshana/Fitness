import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { enterAnimation } from './pages/animations/nav-animation';
import { NgCircleProgressModule } from 'ng-circle-progress';

//import { NgxSpinnerModule } from "ngx-spinner/lib/ngx-spinner.module";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 30000,
      animation:false,
      responsive:true,
      renderOnClick:false,


    }),
    BrowserModule, IonicModule.forRoot({
      navAnimation:enterAnimation
    }), AppRoutingModule,
    AngularFireAuthModule,AngularFireDatabaseModule,AngularFirestoreModule,


  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
