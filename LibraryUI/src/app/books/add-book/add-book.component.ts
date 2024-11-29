import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  categories: Array<Category> = [];
  book: any;
  id: any;

  form = new FormGroup({
    categoryId: new FormControl(1),
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    cover: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(json => {
      this.categories = json;
    });
  }

  onSubmit(): void {
    this.book = this.form.value;
    this.bookService.addBook(this.form.value).subscribe(json => {
      this.router.navigate(['/', 'books']);
      window.alert('The book has been added!')
    });
  }

  onCancel(): void {
    this.router.navigate(['/', 'books']);
  }
}
