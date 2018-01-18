///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileAsynValidator, mobileValidator} from "../validator/validators";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-templ',
  templateUrl: './templ.component.html',
  styleUrls: ['./templ.component.css']
})
export class TemplComponent implements OnInit {

  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsynValidator],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    // const isValid: boolean = this.formModel.get('username').valid;
    // console.dir('username' + isValid);
    // const errors: any = this.formModel.get('username').errors;
    // console.dir('username' + JSON.stringify(errors));
    if (this.formModel.valid) {
      console.dir(this.formModel.value);
    }
  }

}
