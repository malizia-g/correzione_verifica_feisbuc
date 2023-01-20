export class Post
{
    n_like : number;
    commenti : string[] = [];
    constructor(public user: string, public message:string){
        this.n_like = 0;
    }
}