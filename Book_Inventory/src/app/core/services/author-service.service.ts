import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor() { }

  authorSubject = new BehaviorSubject(this.getData());
  author$ = this.authorSubject.asObservable();

  getData(){
    const data = localStorage.getItem('authors');
    return data ? JSON.parse(data) :[];
  }

  addData(authorData:any){

    const authors = this.getData();

    const index =  authors.findIndex((author:any)=>author.id ===authorData.id);

    if(index!==-1){
      authors[index]=authorData;
    }else{
      authors.push(authorData);
    }

    localStorage.setItem('authors',JSON.stringify(authors));
    this.authorSubject.next(authors);
  }

  deleteData(id:number){

    const authors = this.getData();

    const foundAuthors = authors.filter((author:any)=>author.id !==id);
    
    console.log("these are authors after deletion",foundAuthors)

    localStorage.setItem('authors',JSON.stringify(foundAuthors));

    this.authorSubject.next(foundAuthors);

  }

}
