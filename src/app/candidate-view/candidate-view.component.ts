import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-candidate-view',
  templateUrl: './candidate-view.component.html',
  styleUrls: ['./candidate-view.component.css']
})
export class CandidateViewComponent implements OnInit {
  public isCandidateView: boolean;
  public department = [];
  public candidateData = [];
  public tempDept = [];

  constructor(private shared: SharedService) {
    this.isCandidateView = this.shared.isCandidateView;
  }

  ngOnInit() {
    // this.department = [{
    //     deptName: 'Finance'
    //   },
    //   {
    //     deptName: 'Operations'
    //   },
    //   {
    //     deptName: 'HR'
    //   }
    // ];

    this.candidateData = [{
    // tslint:disable-next-line:quotemark
      id: 11,
      // tslint:disable-next-line:quotemark
      name: "Ansh",
      // tslint:disable-next-line:quotemark
      department: "HR",
      // tslint:disable-next-line:quotemark
      joining_date: "8/10/2016"
    },
    {
      id: 12,
      name: 'John',
      // tslint:disable-next-line:quotemark
      department: "HR",
      joining_date: '18/1/2011'
      },
    {
      id: 13,
      name: 'Vish',
      // tslint:disable-next-line:quotemark
      department: "Development",
      joining_date: '28/11/2019'
    },
    {
      id: 14,
      name: 'Barry',
      // tslint:disable-next-line:quotemark
      department: "Operations",
      joining_date: '7/7/2017'
    },
    {
      id: 15,
      name: 'Ady',
      // tslint:disable-next-line:quotemark
      department: "Finance",
      joining_date: '19/8/2017'
    },
    {
      id: 12,
      name: 'Gare',
      // tslint:disable-next-line:quotemark
      department: "Development",
      joining_date: '5/10/2014'
    },
    {
      id: 12,
      name: 'Hola',
      // tslint:disable-next-line:quotemark
      department: "Development",
      joining_date: '6/4/2014'
    },
    {
      id: 12,
      name: 'Ola',
      // tslint:disable-next-line:quotemark
      department: "HR",
      joining_date: '8/12/2019'
    },
    {
      id: 12,
      name: 'Kim',
      // tslint:disable-next-line:quotemark
      department: "Finance",
      joining_date: '7/5/2011'
    },
    {
      id: 13,
      name: 'Johny',
      // tslint:disable-next-line:quotemark
      department: "HR",
      joining_date: '20/10/2010'
  }
  ];

    this.tempDept = [...this.candidateData];
    this.shared.setCandidateDetails(this.candidateData);
}

  deleteDepartment(type: string) {
    if (type && this.candidateData.length > 0) {
      // tslint:disable-next-line:prefer-const
      for (let i = this.candidateData.length - 1; i >= 0; i--) {
        if (this.candidateData[i].department === type) {
          this.tempDept.splice(i, 1);
        }
      }
      this.candidateData = [...this.tempDept]
    }
  }

  sortName() {
    this.candidateData = this.candidateData.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  sortDate() {
    // tslint:disable-next-line:only-arrow-functions
    this.candidateData = this.candidateData.sort(function(a: any, b: any) {
      // tslint:disable-next-line:no-var-keyword
      // tslint:disable-next-line:prefer-const
      // tslint:disable-next-line:one-variable-per-declaration
      const aa = a.joining_date.split('/').reverse().join();
      // tslint:disable-next-line:prefer-const
      const bb = b.joining_date.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
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
