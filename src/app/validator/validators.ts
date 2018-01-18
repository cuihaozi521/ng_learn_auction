import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/Observable";

export  function mobileValidator(control: FormControl): any {
  const myReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  const valid = myReg.test(control.value);
  console.dir("手机" + valid);
  return valid ? null : {mobile: true};
}
export  function mobileAsynValidator(control: FormControl): any {
  const myReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  const valid = myReg.test(control.value);
  console.dir(control.value);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pconfirm.value);
  console.dir("密码" + valid);
  return valid ? null : {equal: {descxxx: '密码不匹配'}};
}
