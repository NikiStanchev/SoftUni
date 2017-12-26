import {Component} from '@angular/core';

@Component({
    selector:'parent',
    template:`
        <h1>Parent</h1>
        <child 
        [fromParent]="titleForChildelement"
        (onSendingDataToParent)="dataReceived($event)"
        ></child>
    `

})
export class ParentComponent{
    titleForChildelement = 'My parent title';

    dataReceived(myData){
        alert(myData);
    }
}