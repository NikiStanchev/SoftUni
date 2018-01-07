export class Recipe {
    $key: string;
    recipeName: string;
    recipeDescriptionFirst?: string;
    recipeDescriptionSecond?: string;
    recipeDescriptionThird?: string;
    products?:string;
    recipeType?: string;
    createdDate?: number;
    timeToMake?: string;
    imageKeys?: string[] = [];
    progress?: number;
    createdBy?: string;
    likes?:number;

    constructor(){
        this.createdDate = Date.now();
        this.likes = 0;
    }
}