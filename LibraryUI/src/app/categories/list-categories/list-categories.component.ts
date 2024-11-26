import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit {
  categories: Array<Category> = [];

  constructor(
    private categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(json => {
      console.log(json);
      this.categories = json;
    });
  }
}
