import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService {

  constructor(
    private bookService: BookService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const id = route.params['id'];
    return this.bookService.getBookById(id);
  }
}
