import { Component ,OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalone',
  templateUrl: './modalone.component.html',
  styleUrls: ['./modalone.component.css']
})
export class ModaloneComponent implements OnInit {
  ngOnInit(): void {

  }
  activeModal: NgbActiveModal;
  constructor(private modalService: NgbModal) {
    this.activeModal = new NgbActiveModal();
  }

  openModal1() {
		const modalRef = this.modalService.open(ModaloneComponent, { centered: true });
		// modalRef.componentInstance.name = 'World';
	}
 displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
