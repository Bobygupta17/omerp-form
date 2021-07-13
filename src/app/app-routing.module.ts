import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerMasterComponent } from './pages/container-master/container-master.component';
const routes: Routes = [
  {
    path: '',
    component:ContainerMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
