import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Book } from '../../models/book';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

  
  categories: Array<Category> = [];
  book: any;
  id: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
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
    })
    this.categoryService.getCategories().subscribe(json => {
      this.categories = json;
    });

    
  }
}
