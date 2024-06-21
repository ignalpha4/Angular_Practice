import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  
  bookForm!:FormGroup;

  errorMsg:string='';

  constructor(private fb:FormBuilder,private bookService:BookServiceService){
    this.initForm();
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

  updateBook(book:any){
    this.bookForm.patchValue(book);
  }

  submit(){
    const book = this.bookForm.value;
    this.bookService.addData(book);

    this.bookForm.reset();
   
  }

}
