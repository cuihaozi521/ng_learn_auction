import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  categories: string[];
  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positveNumberValidatator],
      category: ['-1']
    });
  }
  positveNumberValidatator(control: FormControl): any {
    if (!control.value){
      return null;
    }
    const price = parseInt(control.value);
    if (0 < price) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }
  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }
  onSearch() {
    if(this.formModel.valid) {
      console.dir(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

}
