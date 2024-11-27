import { Injectable } from "@angular/core";
import { ADD_BOOK, DELETE_BOOK_BY_ID, GET_BOOK_BY_ID, GET_BOOKS, UPDATE_BOOK } from "../../api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient) { }
  
    getBooks(): Observable<any> {
        return this.http.get<any>(GET_BOOKS);
    }

    getBookById(id: number): Observable<any> {
        return this.http.get<any>(GET_BOOK_BY_ID(id));
    }

    addBook(body: any): Observable<any> {
        return this.http.post<any>(ADD_BOOK, body);
    }

    updateBook(id: number, body: Book): Observable<any> {
        return this.http.patch<any>(UPDATE_BOOK(id), body);
    }

    deleteBook(id: number): Observable<any> {
        return this.http.delete<any>(DELETE_BOOK_BY_ID(id));
    }

}