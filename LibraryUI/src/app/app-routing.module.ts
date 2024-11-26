import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { Resolvers } from './resolvers';

const routes: Routes = [
  {
    path: 'categories',
    component: ListCategoriesComponent
  },
  {
    path: 'books',
    component: ListBooksComponent
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
