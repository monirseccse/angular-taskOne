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
  
  demo: DemoObject = [
    
  ];
  ValueOfTitle:string='';
  ValueOfDescription:string='';

  titlefield:string='';
  subtitlefield:string='';
  descriptionfield:string='';

  OnSubmit(f:NgForm)
  {
    this.titlefield=f.value.Demo.titles;
    this.descriptionfield=f.value.Demo.Descriptions;
    this.subtitlefield=f.value.Demo.SubTitle;
    this.demo.push({title:this.titlefield,subtitle:this.subtitlefield,description:this.descriptionfield})
    f.reset();
  }
  TitleValidate(evendta:any)
  {
    this.ValueOfTitle=(<HTMLInputElement>evendta.target).value;

  }
  DescriptionValidate(evendata:any)
  {
    this.ValueOfDescription=(<HTMLInputElement>evendata.target).value;
  }
}
type DemoObject = Array<{ title: string; subtitle: string ; description:string; }>;