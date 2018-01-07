export class Upload {
    $key: string;
    name: string;
    file: File;
    url: string;
    //progress: number;

    constructor(file: File){
        this.file = file;
        
    }
}