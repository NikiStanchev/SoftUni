import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'createdBy'
})

export class CreatedBy implements PipeTransform{

    transform(email: string){
        if(email !== undefined){
            return 'Created by: ' + email.slice(0,3) + '......' + email.substr(-3);
        }
        return '';
    }
}