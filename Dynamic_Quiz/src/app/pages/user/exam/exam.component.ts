import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ExamsService } from 'src/app/core/services/exams.service';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  examForm!: FormGroup;
  questionsData: any;
  score: number = 0;

  constructor(private questionService: QuestionService, private fb: FormBuilder,private examService:ExamsService) {}

  ngOnInit() {
    
      let data = this.questionService.getData();
    
      this.questionsData = data.sort(() => 0.5 - Math.random()).slice(0, 10);
    
      this.initForm();

  }

  initForm() {
    this.examForm = this.fb.group({
      questions: this.fb.array([])
    });

    console.log(this.examForm);
    this.addQuestions();
  }

  //to get the array of questions
  get questions() {
    return this.examForm.get('questions') as FormArray;
  }

  addQuestions() {
    console.log("getter has this",this.questions)
    
    this.questionsData.forEach((question: any) => {

      this.questions.push(this.fb.group({
        q_no: [question.q_no], 
        question: [question.question],
        o1: [question.o1],
        o2: [question.o2],
        o3: [question.o3],
        o4: [question.o4],
        correctOption: [question.correctOption],
        answer: ['', Validators.required]
      }));

    });
  }

  submitTest() {

    this.score = 0;
    let total = 0;
    const testResponses = this.examForm.value.questions.map((question: any) => {
      total++;
      const isCorrect = question.answer === question.correctOption;
 
      if (isCorrect) {
        this.score++;
      }

      return {
        q_no:question.q_no,
        question:question.question,
        o1:question.o1,
        o2:question.o2,
        o3:question.o3,
        o4:question.o4,
        answer: question.answer,
        isCorrect: isCorrect,
        correctAns:question.correctOption
      };
    });

    let testDate = new Date();
    let date = testDate.toLocaleDateString();
    let time = testDate.toLocaleTimeString();

    testResponses.push({score:this.score,date:date,time:time});

    console.log("test response:",testResponses)

    alert("You Scored : "+this.score+" out of "+ total)

    this.examService.addData(testResponses);
    
  }
}
