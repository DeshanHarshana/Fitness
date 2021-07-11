import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodydetailsPage } from './bodydetails.page';

const routes: Routes = [
  {
    path: '',
    component: BodydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodydetailsPageRoutingModule {}
