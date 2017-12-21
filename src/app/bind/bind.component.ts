import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private title = 'aaaa1';
  name = 'aaaa1';
  private imgUrl = 'http://placehold.it/320x150';
  size = 2;
  divClass: string;
  birthday: Date = new Date();
  pi: number = 3.1415926;
  big = false;
  constructor() {
    setTimeout(() => {
      this.divClass = "a b c";
      this.big = true;
    }, 500);
  }
  ngOnInit() {
  }
  clickEvent(event: any) {
     this.title = '11';
  }
  doInputEvent(event: any) {
    console.dir(event.target.value);
  }
  doOninput(event: any) {
    console.dir(event);
  }
}
