import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YogaplanPage } from './yogaplan.page';

const routes: Routes = [
  {
    path: '',
    component: YogaplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YogaplanPageRoutingModule {}
