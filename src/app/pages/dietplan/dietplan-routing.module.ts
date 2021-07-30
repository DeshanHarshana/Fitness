import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietplanPage } from './dietplan.page';

const routes: Routes = [
  {
    path: '',
    component: DietplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietplanPageRoutingModule {}
