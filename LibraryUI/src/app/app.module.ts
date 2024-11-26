import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    ListBooksComponent,
    BookDetailsComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
