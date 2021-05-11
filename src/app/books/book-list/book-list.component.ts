import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  get bookFilter(): string{
    return this._bookFilter;
  }
  set bookFilter(value: string){
     // tslint:disable-next-line: no-unused-expression
     this._bookFilter;
     console.log(`In setter the current value is ${value}`);
     this.filteredBooks= this.performFilter(value);
  }

  constructor(private _bookService:BookService) { }
  title: string = 'Book list';
  showImage: boolean = false;
  errorMessage: string ='';
  //bookFilter: string = 'The hobbit';

  // tslint:disable-next-line: variable-name
  private _bookFilter: string = '';
  books: IBook[] = [];
  filteredBooks: IBook[] = [];

  ngOnInit(): void {
    //this.books= this._bookService.getBooks();
    //this.books= this._bookService.GetAllBooks();
    //subscribing to an observable

    this._bookService.getBooks().subscribe({
      next: (response)=>{this.books= response, this.filteredBooks=this.books;},
      error:(err)=>this.errorMessage=err
    })

    console.log('ng on init method called');
    this.bookFilter = ' ';
    //this.filteredBooks=this.books;
   }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
    performFilter(filterBy:string): IBook[]{
      filterBy=filterBy.toLocaleLowerCase();
      return this.books.filter((book:IBook)=>book.title.toLocaleLowerCase().includes(filterBy))
    };
  onRatingClick(message: string): void{
    this.title = `Book List :${message}`;
  }
}
