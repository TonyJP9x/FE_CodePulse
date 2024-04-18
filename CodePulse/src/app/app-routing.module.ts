import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListingComponent } from './features/category-listing/category-listing.component';
import { CategoryAddComponent } from './features/category-add/category-add.component';

const routes: Routes = [
  {path:"home/categorylisting", component:CategoryListingComponent},
  {path:"category/add", component:CategoryAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
