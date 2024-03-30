import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  //categories?: Category[];

  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService){

  }

  //using async pipe instead of suscribing the observable 
  //async pipe simplifies working with observables or promises in your template
  //It automatically subscribe to an observable or resolves a promise and update the template
  //with emitted value.

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    /* .subscribe({
      next: (response) => {
        this.categories = response;
      }
    }); */
  }

}
