import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookServiceService } from 'src/app/core/services/book-service.service';
import {ColDef,ColGroupDef} from "ag-grid-community"
import { IBook } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {


  books:IBook[]=[];

  @Output() updateBook= new EventEmitter<any>();

  constructor(private bookService:BookServiceService){}

  colDef:(ColDef | ColGroupDef)[]=[
    {headerName:"Title",field:'title',filter:true},
    {headerName:"Author",field:'author',filter:true},
    {headerName:"Category",field:'category',filter:true},
    {headerName:"ISBN",field:'isbn',maxWidth:150,filter:true},
    {headerName:"Description",field:'desc'},
    {headerName:"Price",field:'price',maxWidth:120,filter:true},
    {
      headerName:"Action",
      field:"action",
      cellRenderer:()=>{
        return`
        <button type="button" class="btn btn-success btn-sm" data-action-type="edit">Edit</button>
        <button type="button" class="btn btn-danger mx-2 btn-sm" data-action-type="delete">delete</button>
        `;
      },
      onCellClicked:(params:any)=>{

        if(params.event.target.dataset.actionType=="edit"){
          this.editBook(params.data.isbn);
        }
        if(params.event.target.dataset.actionType=="delete"){
          this.deleteBook(params.data.isbn);
        }
      }
    }
  ]

  ngOnInit(){
    this.bookService.books$.subscribe(books=>{
      this.books = books;
    })
  }


  editBook(isbn:number){
    const selectedBook = this.books.find((book)=>book.isbn===isbn);
    this.updateBook.emit(selectedBook);
    console.log("selecyed book is:",selectedBook)
  }

  deleteBook(isbn:number){
    console.log("delete btn clicked");
    this.bookService.deletedata(isbn);
  }
  
}
