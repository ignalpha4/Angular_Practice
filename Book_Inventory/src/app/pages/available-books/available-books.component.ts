import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { BookServiceService } from 'src/app/core/services/book-service.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss']
})
export class AvailableBooksComponent implements OnInit {

  books: IBook[] = [];
  filteredBooks: IBook[] = [];
  searchKey: string = '';

  constructor(private bookService: BookServiceService) {}

  ngOnInit() {
    this.bookService.books$.subscribe(books => {
      this.books = books;
      this.filteredBooks = books;  
    });
  }

  updateResults() {
    this.filteredBooks = this.books.filter(book => 
      book.title.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      book.category.toLowerCase().includes(this.searchKey.toLowerCase())  ||
      book.desc.toLowerCase().includes(this.searchKey.toLowerCase())
    );
  }
}
