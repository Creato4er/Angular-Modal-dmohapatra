import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
state
} from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal-app",
  templateUrl: "./modal-app.component.html",
  styleUrls: ["./modal-app.component.css"],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ 
          // transform: 'scaleX(0.5)',
          opacity: 0,
          transform: 'translateX(200px)'
           }),
        animate('250ms', style({ 
          opacity: 1,
          transform: 'translateX(0)'
          })),
      ]),
      transition(':leave', [
         style({ 
          // transform: 'scaleX(0.5)',
          opacity: 1,
          transform: 'translateX(0)'
           }),
        animate('200ms', style({ 
          opacity: 0,
          transform: 'translateX(50px)'
           }))
      ])
    ]),
  ]
})
export class ModalAppComponent implements OnInit {
  @Input() showModal;
  @Output() closeModal = new EventEmitter<any>();
activeClass: string = 'custom-modal-container';

  constructor() {}

  ngOnInit() {}

  closeModalWindow() {
    this.setShowModal();
  }

  setShowModal() {
    this.showModal = !this.showModal;
    this.closeModal.emit(this.showModal);
  }

  resize() {
    this.activeClass = this.activeClass === 'custom-modal-container-2'? 'custom-modal-container' : 'custom-modal-container-2';
  }
}
