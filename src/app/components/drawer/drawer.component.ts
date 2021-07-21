import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { GestureController, LoadingController, Platform } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit {
@ViewChild('drawer', {read : ElementRef}) drawer : ElementRef;
@Output('openStateChanged') openState:EventEmitter<boolean>=new EventEmitter();

isOpen=false;
openHeight=0;
isSelected:boolean=false;
selectedImage: any;
currentFirebaseImage:string;
private loading;

constructor(
  private plt:Platform,
  private gestureCtrl:GestureController,
  private storage: AngularFireStorage,
  public afStore: AngularFirestore,
  public router:Router,
  public loadingController: LoadingController
) { }

 async ngAfterViewInit() {
    const drawer=this.drawer.nativeElement;
    this.openHeight=(this.plt.height()/100) *30;

    const gesture=await this.gestureCtrl.create({
      el:drawer,
      gestureName:'swipe',
      direction:'y',
      onMove:ev=>{

       if(ev.deltaY> this.openHeight) return;
        drawer.style.transform=`translateY(${ev.deltaY}em)`;
      },
      onEnd:e=>{
if(e.deltaY<-50 && !this.isOpen){
  drawer.style.transition='.4s ease-out';
  drawer.style.transform=`translateY(${-this.openHeight}px)`;
  this.openState.emit(true);
  this.isOpen=true;
}else if(e.deltaY<50 && this.isOpen){
  drawer.style.transition='.4s ease-out';
  drawer.style.transform='';
  this.openState.emit(false);
  this.isOpen=false;
}
      }
    });
    gesture.enable(true);
  }

  toggleDrawer(){
    const drawer=this.drawer.nativeElement;
    this.openState.emit(!this.isOpen)
    if(this.isOpen){
      drawer.style.transition='.4s ease-out';
      drawer.style.transform="";

      this.isOpen=false;
    }else{
      drawer.style.transition='.4s ease-in';
      drawer.style.transform=`translateY(${9}em)`;

      this.isOpen=true;
    }
  }
  detectedFile(event: any){
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage)
    this.isSelected=true;
  }


  delete(downloadUrl) {
    try{
      this.storage.storage.refFromURL(downloadUrl).delete();
    }catch(error){
      console.log("no image");
    }


  }
  loadingOverlay(){
    this.loadingController.create({
     message:"Uploading",
    }).then((overlay)=>{
this.loading=overlay;
this.loading.present();
    });
  }
  saveProfile() {
this.loadingOverlay()
    var name= this.selectedImage.name;
    console.log(name);


    this.delete(localStorage.getItem('currentFirebaseImage'))
    console.log(" old image deleted");

   const fileRef = this.storage.ref(name);
   this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
     finalize(() => {
       fileRef.getDownloadURL().subscribe((url) => {
        this.afStore
        .collection('user')
        .doc(localStorage.getItem('uid'))
        .collection('details')
        .doc(localStorage.getItem('currentUserDoc')).update({
          profile_link:url
        }).then(x=>{
          this.isSelected=false;
          this.toggleDrawer();
this.router.navigate(['tabs/tab3']);
this.loading.dismiss();
        })
       })


     })
   ).subscribe();

 }
}
