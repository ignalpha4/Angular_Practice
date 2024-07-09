import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent{

  questionForm!: FormGroup;
  errorMsg: string = '';
  question: any;

  constructor(private fb: FormBuilder, private questionService: QuestionService) {
    this.initForm();
    this.question = this.questionService.geteditData();
    this.questionForm.patchValue(this.question);
  }

  initForm() {
    this.questionForm = this.fb.group({
      q_no: ['', Validators.required],
      question: ['', Validators.required],
      o1: ['', Validators.required],
      o2: ['', Validators.required],
      o3: ['', Validators.required],
      o4: ['', Validators.required],
      correctOption: ['', Validators.required],
      difficulty: ['', Validators.required]
    });
    console.log('Form initialized:', this.questionForm);
  }
  submit() {
    const question = this.questionForm.value;
    console.log('Submitting form:', question);
    this.questionService.addData(question);
    this.questionForm.reset();
    this.question =null;
  }
}
