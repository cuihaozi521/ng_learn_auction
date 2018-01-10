import { Component } from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stock = "";
  title = 'app';
  title2 = 'app2';
  greeting = 'gellow';
  user: {name: string} = {name: 'toms'};
  priceQuote: PriceQuote = new PriceQuote('', 0);

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
