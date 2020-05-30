import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';
// import { emit } from 'cluster';

@Component({
  // selector: '.app-test',
  selector:'[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Yasmin M S";
  // public siteUrl = window.location.href;
  public fungsi=true;
  public successClass='text-success';
  
  // class binding
  public isCondition=false;
  public isSpecial=true;
  public messageClass = {
    "text-success": !this.isCondition,
    "text-danger": this.isCondition,
    "text-special": this.isSpecial,
  }

  // Style Binding
  public highlightColor = "orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic",
  }

  // Event Binding
  public greetings ="";
  public greetingsEventType ="";

  public twoWayDataBinding="";

  // ngIf
  public displayName = false

  // ngSwitchCase
  public conditionalColor = "blue";

  // ngFor
  public colors =['red','green','yellow','blue']; 

  // Component Interaction
  @Input('parentData') public parentName;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  // Perkenalan awal
  // greetUser(){
  //   return `Hello ${this.name}`
  // }

  // Event Handling
  onClick(){
    console.log('Welcome to my page');
    this.greetings="Ilyas Arya";
  }
  onClickEvent(event){
    console.log(event);
    this.greetingsEventType=event.type;
  }

  // Template Reference
  onTemplateRef(value){
    console.log(value)
  }

  fireEvent(){
    this.childEvent.emit('Hey Codeevolution');
  }


}
