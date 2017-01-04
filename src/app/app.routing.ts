import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: QuestionsComponent },
  { path: 'questions/new', component: QuestionFormComponent},
  { path: 'questions/:id', component: QuestionFormComponent},
  { path: 'questions/:id/edit', component: QuestionFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
