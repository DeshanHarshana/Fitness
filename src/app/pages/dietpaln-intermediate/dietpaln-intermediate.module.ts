import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietpalnIntermediatePageRoutingModule } from './dietpaln-intermediate-routing.module';

import { DietpalnIntermediatePage } from './dietpaln-intermediate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietpalnIntermediatePageRoutingModule
  ],
  declarations: [DietpalnIntermediatePage]
})
export class DietpalnIntermediatePageModule {}
