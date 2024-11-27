import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { Resolvers } from './resolvers';
import { AddBookComponent } from './books/add-book/add-book.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';

const routes: Routes = [
  {
    path: 'categories',
    component: ListCategoriesComponent
  },
  {
    path: 'categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailsComponent,
    resolve: {
      category: Resolvers.CategoryResolverService,
    }
  },
  {
    path: 'books',
    component: ListBooksComponent
  },
  {
    path: 'books/add',
    component: AddBookComponent
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    resolve: {
      book: Resolvers.BookResolverService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
