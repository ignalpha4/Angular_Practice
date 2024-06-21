import { Component, EventEmitter, Output } from '@angular/core';
import { AuthorServiceService } from 'src/app/services/author-service.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {

  authors:any[]=[];

  @Output() selectedAuthor = new EventEmitter<any>();

  constructor(private authService:AuthorServiceService){}

  ngOnInit(){
      this.authService.author$.subscribe((authors)=>{
        this.authors=authors;
      })
  }

  colDef:any[]=[
    {headerName:'Authors Id',field:'id'},
    {headerName:'Author Name',field:'name'},
    {headerName:"Nationality",field:'nation'},
    {headerName:"Biography",field:'bio',minWidth:500},
    {
      headerName:"Actions",
      field:"action",
      cellRenderer:(params:any)=>{
        return `
         <button class="btn btn-success btn-sm" data-action-type="edit" >Edit</button> 
        <button class="btn btn-danger mx-3 btn-sm" data-action-type="delete">Delete</button> 
        `
      },
      onCellClicked:(params:any)=>{
        if(params.event.target.dataset.actionType==='edit'){
          this.editAuthor(params.data.id)
        }
        if(params.event.target.dataset.actionType==='delete'){
          this.deleteAuthor(params.data.id);
        }
      }
    }
  ]

  editAuthor(id:number){
    const foundAuthor = this.authors.find((author)=>author.id ===id);
    this.selectedAuthor.emit(foundAuthor);
  }

  deleteAuthor(id:number){
    this.authService.deleteData(id);
  }

}
