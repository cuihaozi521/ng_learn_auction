///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges {
  @Input()
  greeting: string;
  @Input()
  user: {name: string};
  messages = '初始化消息';
  constructor() {}
  ngOnInit() {
  }
  ngOnChanges( changes: SimpleChanges ): void {
    console.dir( JSON.stringify(changes, null, 2));
  }
}
