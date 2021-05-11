import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBook } from './book';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _booksUrl: string = 'assets/api/books/books.json';
   //books: IBook[] = [];  we using a service we dont need this array anymore
  constructor(private _httpClient : HttpClient) { }

  // GetAllBooks(): IBook[]{
  //   return this.books;
  // }
  // Creating an observable to get the data from the service in the json file
  getBooks(): Observable<IBook[]>{
    // console.log(this._httpClient.get<IBook[]>(this._booksUrl));  
    return this._httpClient.get<IBook[]>(this._booksUrl);
    pipe(
      tap((data) => console.log(`All books Data ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
 //error code
 let errorMessage = '';
   if(err.error instanceof ErrorEvent){
     errorMessage=`An error occured ${err.error.message}`
   }else{
     errorMessage= `Server returned code:${err.status}, error message is :${err.message}`
   }
   console.error(errorMessage);
   return throwError(errorMessage);
  }

}
