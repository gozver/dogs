import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { DogComponent } from './components/dog/dog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'dog',
    component: DogComponent,
  }, {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
