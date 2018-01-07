import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'dateFormat'
})

export class DateFormat implements PipeTransform{

    transform(date: number){
        return new Date(date).toLocaleDateString();
    }
}