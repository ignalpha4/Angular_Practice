import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorServiceService } from 'src/app/services/author-service.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent {

    authorForm!:FormGroup;

    constructor(private fb:FormBuilder,private authorService:AuthorServiceService){
      this.initForm();
    }

    initForm(){
      this.authorForm=this.fb.group(
        {
          id:['',Validators.required],
          name:['',Validators.required],
          bio:['',Validators.required],
          nation:['',Validators.required]
        }
      )
    }

    submit(){
      const addedAuthor =  this.authorForm.value; 
      this.authorService.addData(addedAuthor);

      this.authorForm.reset()
    }

    updateAuthor(author:any){
      this.authorForm.patchValue(author);
    }
    
}
