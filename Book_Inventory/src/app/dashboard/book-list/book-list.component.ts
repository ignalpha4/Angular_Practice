import { Component, Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {


  books:any[]=[];

  constructor(private bookService:BookServiceService){}

  colDef:any[]=[
    {headerName:"Title",field:'title'},
    {headerName:"Author",field:'author'},
    {headerName:"Category",field:'category'},
    {headerName:"ISBN",field:'isbn'},
    {headerName:"Description",field:'desc'},
    {headerName:"Price",field:'price'},
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
    console.log("edit btn clicked");
  }

  deleteBook(isbn:number){
    console.log("delete btn clicked");
  }
  
}
