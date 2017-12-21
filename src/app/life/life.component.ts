import {
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges
} from '@angular/core';
const logIndex: number = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  @Input()
  name: string;
  logIt(msg: string) {
    console.dir(`#${logIndex++}${msg}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logIt("name在constructor是" + name);
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");

  }

  constructor() {
    this.logIt("name在constructor是" + name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

}
