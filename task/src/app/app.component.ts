import { Component ,Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   
  }
  title = 'Task';
  ValueOfTitle:string='';
  ValueOfDescription:string='';

  OnSubmit(f:NgForm)
  {
console.log(f);
  }
  TitleValidate(evendta:any)
  {
    this.ValueOfTitle=(<HTMLInputElement>evendta.target).value;

  }
  DescriptionValidate(evendta:any)
  {
    this.ValueOfDescription=(<HTMLInputElement>evendta.target).value;
  }
}
