import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'dashboard',component:DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
