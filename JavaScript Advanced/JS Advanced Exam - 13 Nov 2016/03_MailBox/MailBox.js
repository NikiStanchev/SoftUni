class MailBox{

    constructor(){
        this.messages = [];
    }


    addMessage(subject, text){
        let message = {
            subject: subject,
            text: text
        };
        this.messages.push(message);
        return this;
    }

    get messageCount(){
        return this.messages.length;
    }


    deleteAllMessages(){
        this.messages = [];
    }


    findBySubject(substr){
        let matchedMessages = [];
        for(let message of this.messages){
            if(message.subject.indexOf(substr) !== -1){
                let subject = message.subject;
                let text = message.text;
                matchedMessages.push({subject, text});
            }
        }
        return matchedMessages;
    }

    toString(){
        if(this.messages.length === 0){
            return ' * (empty mailbox)';
        }

        let result = '';
        for(let message of this.messages){
            result += ` * [${message.subject}] ${message.text}\n`;
        }

        return ' ' + result.trim();
    }
}

let mail = new MailBox();

mail.addMessage("meeting", "Let's meet at 17/11");
mail.addMessage("beer", "Wanna drink beer tomorrow?");
mail.addMessage("meeting", "Test");

console.log(mail.toString());

let mail1 = new MailBox();
console.log(mail1.toString());

mail.findBySubject('str');