export class Upload {
    $key: string;
    name: string;
    file: File;
    url: string;

    constructor(file: File){
        this.file = file;
        
    }
}