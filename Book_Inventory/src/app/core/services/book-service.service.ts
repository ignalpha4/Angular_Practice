import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private booksSubject = new BehaviorSubject<any[]>(this.getData());
  books$=this.booksSubject.asObservable();

  constructor() { }

  addData(bookData:IBook) {

    const books = this.getData()

    const index = books.findIndex((book:IBook)=>book.isbn === bookData.isbn)

    if(index!==-1){
      books[index]=bookData;
    }else{
      books.push(bookData);
    }
 

    localStorage.setItem('books',JSON.stringify(books));
    this.booksSubject.next(books);

  }

  getData(){
    const data =localStorage.getItem('books');
    return data ? JSON.parse(data):[];
  }

  deletedata(isbn:number){

      let books = this.getData();
      console.log("isbn",isbn)

      const updatedBooks = books.filter((book:IBook)=>book.isbn !== isbn)

      localStorage.setItem('books',JSON.stringify(updatedBooks));

      this.booksSubject.next(updatedBooks);
      
  }


}
