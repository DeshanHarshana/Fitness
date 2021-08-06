import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaplanPageRoutingModule } from './yogaplan-routing.module';

import { YogaplanPage } from './yogaplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaplanPageRoutingModule
  ],
  declarations: [YogaplanPage]
})
export class YogaplanPageModule {}
