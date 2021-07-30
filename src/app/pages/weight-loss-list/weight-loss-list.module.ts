import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightLossListPageRoutingModule } from './weight-loss-list-routing.module';

import { WeightLossListPage } from './weight-loss-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightLossListPageRoutingModule
  ],
  declarations: [WeightLossListPage]
})
export class WeightLossListPageModule {}
