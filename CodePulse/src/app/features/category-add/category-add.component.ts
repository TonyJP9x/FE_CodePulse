import { Component } from '@angular/core';
import { Category } from '../model/category.model';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  model:Category;
  constructor(){
   this.model = {
    name:"aa",
    urlHandle:"aa"
   }
  }
  onFormSubmit(){

  }
}
