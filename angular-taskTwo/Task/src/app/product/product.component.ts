import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name:string|null=null;
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.name= this.route.snapshot.params['name'];
  }

}
