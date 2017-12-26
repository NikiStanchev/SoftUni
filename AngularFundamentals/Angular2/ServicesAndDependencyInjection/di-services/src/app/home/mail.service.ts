import {Injectable} from '@angular/core';

@Injectable()
export class MailService{
    sendMail(title:string, recepient:string, message:string){
        console.log('Mail Sent');
    }
}