import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import {Question} from "../shared/question";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})

export class QuestionFormComponent implements OnInit {

  title: string;
  question: Question = new Question();

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Faq Question' : 'Create Faq Question';

      if (!id)
        return;

      this.questionService.getQuestion(id)
        .subscribe(
          question => this.question = question,
          response => {});
    });
  }

  save() {
    var result;

    if (this.question.id){
      result = this.questionService.updateQuestion(this.question);
    } else {
      result = this.questionService.addQuestion(this.question);
    }
    result.subscribe(data => this.router.navigate(['/']));
  }

}
