import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Book } from '../../models/book';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  
  categories: Array<Category> = [];
  book: any;
  id: any;

  form = new FormGroup({
    bookId: new FormControl(''),
    categoryId: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
    cover: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) {}

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url + '&sz=w1000');
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data['book']);
      this.book = data['book'];
      this.form.get('bookId')?.setValue(this.book.bookId);
      this.form.get('categoryId')?.setValue(this.book.categoryId);
      this.form.get('title')?.setValue(this.book.title);
      this.form.get('description')?.setValue(this.book.description);
      this.form.get('author')?.setValue(this.book.author);
      this.form.get('price')?.setValue(this.book.price);
      this.form.get('cover')?.setValue(this.book.cover);
    });
    this.categoryService.getCategories().subscribe(json => {
      this.categories = json;
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.book = this.form.value;
    this.bookService.updateBook(this.book.bookId, this.book).subscribe(json => {
      console.log(json);
      window.location.reload();
      window.alert('The changes has been saved!')
    });
  }

  onDelete(): void {
    console.log(this.book.bookId);
    this.bookService.deleteBook(this.book.bookId).subscribe(json => {
      this.router.navigate(['/', 'books']);
    });
  }
}
