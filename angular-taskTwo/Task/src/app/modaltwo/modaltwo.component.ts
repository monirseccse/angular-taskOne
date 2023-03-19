import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltwo',
  templateUrl: './modaltwo.component.html',
  styleUrls: ['./modaltwo.component.css']
})
export class ModaltwoComponent implements OnInit {
  ngOnInit(): void {

  }
 displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
