import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';

// import $ from 'jquery';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})

export class CandidatesComponent implements OnInit {
  // @ViewChild('selectElem', { static: false}) el: ElementRef;

  public toggleMenu = false;
  public isCandidateView: boolean;
  // tslint:disable-next-line:no-inferrable-types
  public searchString: string = '';

  // tslint:disable-next-line:prefer-const
// tslint:disable-next-line:variable-name

  constructor(private shared: SharedService) {
    this.isCandidateView = this.shared.isCandidateView;
  }

  ngOnInit() {

  }

  viewDepartment() {
    this.isCandidateView = false;
  }

  navigateBack(){
    this.isCandidateView = true;
  }

  // goToDepartment() {

  // }

}
