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
  addToAll(entry: string) {
    if (entry) {
      this.all.push(entry);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}