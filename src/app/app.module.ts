import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { FilterNamePipe } from './filter-name.pipe';
import { DepartmentComponent } from './department/department.component';
import { CandidateViewComponent } from './candidate-view/candidate-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    FilterNamePipe,
    DepartmentComponent,
    CandidateViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [
    FilterNamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
