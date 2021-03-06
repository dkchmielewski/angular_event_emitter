// import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-cockpit',
//   templateUrl: './cockpit.component.html',
//   styleUrls: ['./cockpit.component.css']
// })
// export class CockpitComponent implements OnInit {
//   newServerName = '';
//   newServerContent = '';
//   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//   @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onAddServer() {
//     this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
//   }

//   onAddBlueprint() {
//     this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
//   }

// }
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void { }

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

}