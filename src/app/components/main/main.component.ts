import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = "Functional Programming w/ RxJS";
  subTitle: string = "Please only enter numbers and letters";
  all = [];
  letters = [];
  numbers = [];

constructor(private subjectsService: MainService) { }

ngOnInit() {
  this.subjectsService.allSubject.subscribe((entry: string) => {
    this.addToAll(entry);
  });
  this.subjectsService.letterSubject.subscribe((entry: string) => {
    this.addToLetters(entry);
  });
  this.subjectsService.numberSubject.subscribe((entry: string) => {
    this.addToNumbers(entry);
  });
}

pushPayloadToSubjects(entry: string){
  //.next each of our subjects
  //functional way
  let regExToLettersArray = entry.match(/[a-zA-Z]+/g);
  console.log(regExToLettersArray);
  if(regExToLettersArray){
  let regExToLettersString: string;
    regExToLettersString = regExToLettersArray.toString();
      this.subjectsService.letterSubject.next(regExToLettersString);
  }
  let regExtToNumbersArray = entry.match(/[0-9]+/g);
  if (regExtToNumbersArray) {
   let regExToNumbersString = 
   regExtToNumbersArray.toString();
    this.subjectsService.numberSubject.next(regExToNumbersString);
  }

  this.subjectsService.allSubject.next(entry);


  //non functional rxjs way of doing things
  // this.addToAll(entry);
  // this.addToLetters(entry);
  // this.addToNumbers(entry);
}

addToAll(entry: string) {
  if (entry) {
    this.all.push(entry);
  }
}

addToLetters(entry: string) {
  if (entry) {
    this.letters.push(entry);
  }
}

addToNumbers(entry: string) {
  if (entry) {
    this.numbers.push(entry);
  }
}




}