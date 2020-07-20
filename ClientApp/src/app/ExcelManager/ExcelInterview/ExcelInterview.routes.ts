import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelInterviewComponent } from './ExcelInterview.component';

const routes: Routes = [
  { path: '', component: ExcelInterviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelInterviewRoutingModule { }
