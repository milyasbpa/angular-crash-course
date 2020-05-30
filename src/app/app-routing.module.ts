import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailcomponentComponent } from './detailcomponent/detailcomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';


const routes: Routes = [
  { path:'detail', component: DetailcomponentComponent},
  { path:'list', component:ListcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [DetailcomponentComponent,ListcomponentComponent];
