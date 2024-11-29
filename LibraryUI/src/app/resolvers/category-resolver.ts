import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService {

  constructor(
    private categoryService: CategoryService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const id = route.params['id'];
    return this.categoryService.getCategoryById(id);
  }
}
