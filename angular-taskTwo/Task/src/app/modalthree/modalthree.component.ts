import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-modalthree',
  templateUrl: './modalthree.component.html',
  styleUrls: ['./modalthree.component.css']
})
export class ModalthreeComponent implements OnInit {
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
