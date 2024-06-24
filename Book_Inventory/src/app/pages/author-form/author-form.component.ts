import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorServiceService } from 'src/app/core/services/author-service.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent {

    authorForm!:FormGroup;
    counter:number = 1;    

    constructor(private fb:FormBuilder,private authorService:AuthorServiceService){
      this.initilizeCounter()
      this.initForm();
    }

    initilizeCounter(){
      this.counter= 1;

      let authors = this.authorService.getData();

      authors.forEach((author:any)=>{
        this.counter++;
      })

    }

    initForm(){

      this.authorForm=this.fb.group(
        {
          id: [ this.counter, Validators.required],
          name:['',Validators.required],
          bio:['',Validators.required],
          nation:['India',Validators.required]
        }
      )
      this.authorForm.get('id')?.disable();
   
    }

    submit(){
      const addedAuthor = this.authorForm.getRawValue();
      this.counter = this.counter + 1;
      this.authorService.addData(addedAuthor);

      this.authorForm.reset()

      this.initForm();
    }

    updateAuthor(author:any){
      this.authorForm.patchValue(author);
    }
    
}
