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
}

clickEvent(entry: string){
  //.next each of our subjects
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




}