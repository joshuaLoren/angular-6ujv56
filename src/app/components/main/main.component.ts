import { Component, OnInit } from '@angular/core';

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


clickEvent(entry: string){
  this.addToAll(entry);
  this.addToLetters(entry);
  this.addToNumbers(entry);
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


constructor() { }

ngOnInit() {
}

}