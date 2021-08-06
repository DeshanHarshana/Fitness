import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./pages/age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'bodydetails',
    loadChildren: () => import('./pages/bodydetails/bodydetails.module').then( m => m.BodydetailsPageModule)
  },
  {
    path: 'complete',
    loadChildren: () => import('./pages/complete/complete.module').then( m => m.CompletePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'playground/:id',
    loadChildren: () => import('./pages/playground/playground.module').then( m => m.PlaygroundPageModule)
  },
  {
    path: 'weight-loss-list',
    loadChildren: () => import('./pages/weight-loss-list/weight-loss-list.module').then( m => m.WeightLossListPageModule)
  },
  {
    path: 'dietplan',
    loadChildren: () => import('./pages/dietplan/dietplan.module').then( m => m.DietplanPageModule)
  },
  {
    path: 'dietpaln-intermediate/:id',
    loadChildren: () => import('./pages/dietpaln-intermediate/dietpaln-intermediate.module').then( m => m.DietpalnIntermediatePageModule)
  },
  {
    path: 'test/:id',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'yogaplan',
    loadChildren: () => import('./pages/yogaplan/yogaplan.module').then( m => m.YogaplanPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
