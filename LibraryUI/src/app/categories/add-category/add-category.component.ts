import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  category: any;
  id: any;

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.categoryService.addCategory(this.form.value).subscribe(json => {
      this.router.navigate(['/', 'categories']);
      window.alert('The category has been added!')
    });
  }

  onCancel(): void {
    this.router.navigate(['/', 'categories']);
  }
}
