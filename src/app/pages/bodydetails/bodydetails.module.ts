import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodydetailsPageRoutingModule } from './bodydetails-routing.module';

import { BodydetailsPage } from './bodydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodydetailsPageRoutingModule
  ],
  declarations: [BodydetailsPage]
})
export class BodydetailsPageModule {}
