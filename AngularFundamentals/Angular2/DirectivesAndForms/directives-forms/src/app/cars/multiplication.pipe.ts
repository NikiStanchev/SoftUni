import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'multiply'
})

export class MultiplicationPipe implements PipeTransform{

    transform(value: number, times:string){

        const timeAsFloat = parseFloat(times);
        const timesNumber = isNaN(timeAsFloat) ? 1 : timeAsFloat;
        return value * timesNumber;
    }
}