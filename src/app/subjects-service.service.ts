import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectsServiceService {

  allSubject = new Subject<string>();
  letterSubject = new Subject<string>();
  numberSubject = new Subject<string>();

  constructor() { }

}