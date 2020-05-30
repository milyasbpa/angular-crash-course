import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailcomponentComponent } from './detailcomponent/detailcomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:'detail', component: DetailcomponentComponent},
  { path:'list', component:ListcomponentComponent},
  { path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [DetailcomponentComponent,ListcomponentComponent];
