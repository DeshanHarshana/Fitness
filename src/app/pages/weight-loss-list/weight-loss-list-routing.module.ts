import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightLossListPage } from './weight-loss-list.page';

const routes: Routes = [
  {
    path: '',
    component: WeightLossListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightLossListPageRoutingModule {}
