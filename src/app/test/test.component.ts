import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayTitle = true;

  public items = [
    {description: 'item 1', id:1},
    {description: 'item 2', id:2},
    {description: 'item 3', id:3},
    {description: 'item 4', id:4},
    {description: 'item 5', id:5},

  ];
  constructor() { }

  ngOnInit(): void {
  }
  public changeTitleDisplayStatus(){
    if(this.displayTitle == true){
      this.displayTitle = false;
    }else
    this.displayTitle = true;
  }

}
