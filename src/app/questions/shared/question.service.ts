import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuestionService {

  private url: string = "http://localhost:3000/questions";

  constructor(private http: Http) { }

  getQuestions(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getQuestion(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addQuestion(question){
    return this.http.post(this.url, {'question': question})
      .map(res => res.json());
  }

  updateQuestion(question){
    return this.http.put(this.url + '/' + question.id, {'question': question})
      .map(res => res.json());
  }

  deleteQuestion(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
