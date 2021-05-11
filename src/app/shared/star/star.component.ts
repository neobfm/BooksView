import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  cropWidth:number = 75;
  @Input() rating:number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); //making the propery an javascript event
  constructor() { }

  ngOnInit(): void {
  }
   ngOnChanges(): void{
     this.cropWidth = this.rating * 75/5
   }
   onRatingClick(): void{
     console.log(`The rating ${this.rating} was clicked`);
     this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
   }
}
