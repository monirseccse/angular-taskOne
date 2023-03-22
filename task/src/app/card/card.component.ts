import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() title:any;
  @Input() subtitle:any;
  @Input() description:any;
  @Input() demo:any;
  ngOnInit(): void {
    
  }

}
