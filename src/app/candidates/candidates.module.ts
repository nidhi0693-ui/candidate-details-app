import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateViewComponent } from '../candidate-view/candidate-view.component';
import { DepartmentComponent } from '../department/department.component';




@NgModule({
  declarations: [ CandidateViewComponent, DepartmentComponent ],
  imports: [
    CommonModule
  ]
})
export class CandidatesModule { }
