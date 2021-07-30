import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietplanPageRoutingModule } from './dietplan-routing.module';

import { DietplanPage } from './dietplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietplanPageRoutingModule
  ],
  declarations: [DietplanPage]
})
export class DietplanPageModule {}
