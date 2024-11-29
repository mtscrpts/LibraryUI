import { Injectable } from "@angular/core";
import { ADD_CATEGORY, DELETE_CATEGORY_BY_ID, GET_CATEGORIES, GET_CATEGORY_BY_ID, UPDATE_CATEGORY } from "../../api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) { }
  
    getCategories(): Observable<any> {
        return this.http.get<any>(GET_CATEGORIES);
    }

    getCategoryById(id: number): Observable<any> {
        // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        // return this.http.get<any>(GET_CATEGORY_BY_ID(id), { headers: headers });
        return this.http.get<any>(GET_CATEGORY_BY_ID(id));
    }

    addCategory(body: any): Observable<any> {
        return this.http.post<any>(ADD_CATEGORY, body);
    }

    updateCategory(id: number, body: Category): Observable<any> {
        return this.http.patch<any>(UPDATE_CATEGORY(id), body);
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete<any>(DELETE_CATEGORY_BY_ID(id));
    }

}