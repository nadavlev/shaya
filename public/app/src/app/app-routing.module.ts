import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapViewComponent} from '@app/map-view/map-view.component';
import {MainMenuComponent} from "@app/main-menu/main-menu.component";


const routes: Routes = [
  {path: 'map-view', component: MapViewComponent},
  {path: '', component: MainMenuComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
