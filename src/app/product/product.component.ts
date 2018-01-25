import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {WebSocketService} from "../shared/web-socket.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<any>;
  private imgUrl= 'http://placehold.it/320x150';
  private titleFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(private http: Http,private wsService: WebSocketService) {
    const headers = new Headers();
    headers.append('Authorization', 'Basic 12345');
    this.products = this.http.get('/api/products', {headers: headers} )
        .map((res) => res.json());
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }


  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('流已经结束')
      );
  }
  sendMessageToService() {
    this.wsService.sendMessage("Hello from Messages");
  }
}



