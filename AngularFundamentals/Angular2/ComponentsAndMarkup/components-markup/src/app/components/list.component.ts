import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector:'list',
    template:`
    <ul *ngIf="showList">
        <li *ngFor="let number of numbers" >{{number}}</li>
    </ul>
    <button (click)="changeListState()">Show/Hide List</button>
    `
})
export class ListComponent implements OnInit, OnDestroy{
    numbers = [1, 2, 3, 4, 5];
    showList = true;

    ngOnInit(){
        console.log('Created');
    }

    ngOnDestroy(){
        console.log('Destroyed');
    }

    changeListState(){
        this.showList = !this.showList;
    }
}