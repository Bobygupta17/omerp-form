import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainermasterComponent } from './containermaster/containermaster.component';
const routes: Routes = [
  {
    path: '',
    component: ContainermasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
