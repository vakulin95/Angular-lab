import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SkiComponent } from './ski/ski.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'ski', component: SkiComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
