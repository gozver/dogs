import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'dog',
    loadChildren: () => import('./dog/dog.module').then(m => m.DogModule)
  }, {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes),
    TranslateModule
  ],
  exports: [
    RouterModule,
    TranslatePipe
  ],
  providers: [TranslateModule]
})
export class AppRoutingModule { }
