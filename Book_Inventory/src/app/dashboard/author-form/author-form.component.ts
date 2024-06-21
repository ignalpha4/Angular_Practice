import { Component, SimpleChanges } from '@angular/core';
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


    counter:number = 1;    

    initForm(){
      this.authorForm=this.fb.group(
        {
          id: [{ value: this.counter, disabled: true }, Validators.required],
          name:['',Validators.required],
          bio:['',Validators.required],
          nation:['',Validators.required]
        }
      )
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
