import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ICategory } from 'src/app/core/interfaces/category.interface';
import { AuthorServiceService } from 'src/app/core/services/author-service.service';
import { BookServiceService } from 'src/app/core/services/book-service.service';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  
  bookForm!:FormGroup;

  errorMsg:string='';

  //authors and categories
  authors:IAuthor[] =[];
  categories:ICategory[]=[]

  constructor(private fb:FormBuilder,private bookService:BookServiceService,private categoryService:CategoryServiceService,private authorService:AuthorServiceService){
    this.initForm();
  }

  ngOnInit(){
    this.categoryService.category$.subscribe((categories)=>{
      this.categories = categories
    })

    this.authorService.author$.subscribe((authors)=>{
      this.authors = authors;
    })
  }
  initForm(){
    this.bookForm= this.fb.group({
      title:['',Validators.required],
      author:['',Validators.required],
      category:['',Validators.required],
      isbn:['',Validators.required],
      desc:[''],
      price:['',Validators.required]
    })
  }

  updateBook(book:IBook){
    this.bookForm.patchValue(book);
  }

  submit(){
    const book = this.bookForm.value;
    this.bookService.addData(book);
    this.bookForm.reset();
  }

}
