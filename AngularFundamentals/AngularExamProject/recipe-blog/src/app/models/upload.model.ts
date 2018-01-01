export class Upload {
    $key: string;
    name: string;
    file: File;
    url: string;
    progress: number;
    createdOn: Date = new Date();
    recipeName: string;
    recipeDescription: string;

    constructor(file: File){
        this.file = file;
    }
}