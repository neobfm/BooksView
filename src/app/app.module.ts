import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { BookListComponent } from './books/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookPipe } from './books/book.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    BookListComponent,
    BookPipe,
    StarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
