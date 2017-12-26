import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'child',
    template:`
        <h1>Child</h1>
        <div>{{fromParent}}</div>
        <button (click)="sendToParent()">Send data to perant</button>
    `

})
export class ChildComponent{
    @Input() fromParent:string;
    @Output() onSendingDataToParent = new EventEmitter<string>();

    sendToParent(){
        this.onSendingDataToParent.emit('Data to the parent');
    }
}