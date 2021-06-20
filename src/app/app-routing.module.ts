import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intranet',
    loadChildren: () => import('./modules/intranet/intranet.module')
      .then(m => m.IntranetPageModule)
  },
  {
    path: '',
    redirectTo: 'intranet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
