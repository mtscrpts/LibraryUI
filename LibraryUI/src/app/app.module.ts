import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './books/add-book/add-book.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { LoginComponent } from './authentication/login/login.component';
import { HttpInterceptorProviders } from './interceptors';
import { UserState } from './ngxs/states/user.state';
import { NgxsModule } from '@ngxs/store';
import { HomeComponent } from './home/home/home.component';
import { CategoryResolverService } from './resolvers/category-resolver';
import { BookResolverService } from './resolvers/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    ListBooksComponent,
    BookDetailsComponent,
    AddBookComponent,
    CategoryDetailsComponent,
    AddCategoryComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      UserState
    ], {
        
    }),
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
