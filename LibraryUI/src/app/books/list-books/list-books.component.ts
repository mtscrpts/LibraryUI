import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit {
  books: Array<Book> = [];

  constructor(
    private bookService: BookService,
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(json => {
      console.log(json);
      this.books = json;
    });
  }
}
