import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.component.html',
  styleUrls: ['./modalone.component.css']
})
export class ModaloneComponent implements OnInit {
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
