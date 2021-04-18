import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodBuilderComponent } from './food-builder/food-builder.component';

const routes: Routes = [
  {path:':foodName', component:FoodBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
