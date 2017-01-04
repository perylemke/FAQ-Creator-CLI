import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { routing } from './app.routing';

import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionService } from './questions/shared/question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
