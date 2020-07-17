import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isCandidateView =  true;
  public candidateDetails = [];
  constructor() { }

  setCandidateDetails(cd: any) {
    this.candidateDetails = cd;
  }

  getCandidateDetails() {
    return this.candidateDetails;
  }


}
