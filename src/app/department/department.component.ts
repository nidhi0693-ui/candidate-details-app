import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public isCandidateView: boolean;
  public candidateList = [];
  public deptDetails = [];

  constructor(private shared: SharedService) {
    this.isCandidateView = this.shared.isCandidateView;
    this.candidateList = this.shared.getCandidateDetails();
    this.deptDetails = [{
        department: 'HR',
        count: 0
      },
      {
        department: 'Development',
        count: 0
      },
      {
        department: 'Finance',
        count: 0
      },
      {
        department: 'Operations',
        count: 0
      }
    ];
    this.countEmployees(this.candidateList);
   }

  ngOnInit() { 
  }

  countEmployees(candidateList: any) {
    if (candidateList && candidateList.length > 0) {
      // tslint:disable-next-line:no-var-keyword
      // tslint:disable-next-line:prefer-for-of
      for(let i = 0; i < candidateList.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.deptDetails.length; j++ ) {
          if (candidateList[i].department === this.deptDetails[j].department) {
            this.deptDetails[j].count++;
          }
        }
      }
    }
  }

  getCustomClass(department: any) {
    // tslint:disable-next-line:prefer-const
    let backgroundColor = {
      'background-color': ''
    };
    if (department) {
      switch (department) {
        case 'HR':
          backgroundColor['background-color'] = '#ff4d4d';
          break;
        case 'Operations':
          backgroundColor['background-color'] = '#40bf40';
          break;
        case 'Development':
          backgroundColor['background-color'] = '#4d79ff';
          break;
        case 'Finance':
          backgroundColor['background-color'] = '#e6ac00';
          break;
        default:
          break;

      }
      return backgroundColor;
    }

  }

}
