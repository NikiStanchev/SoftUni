import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'test-params',
    template:`
        <h1>{{paramId}}</h1>
    `
})

export class TestComponent{
    paramId:string;
    constructor(private route:ActivatedRoute){
        this.paramId = this.route.snapshot.paramMap.get('id');
    }
}